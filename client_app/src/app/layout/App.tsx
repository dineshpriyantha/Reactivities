import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Container} from 'semantic-ui-react';
import { IActivity } from '../models/activity';
import { NavBar } from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


// interface IState {
//   activities: IActivity[]
// }

// function App() {
// }

// const App: React.FC = () => {
// }

const App = () => {

  const[activities, setActivities] = useState<IActivity[]>([]);
  const[selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const[editMode, setEditMode] = useState(false);

  const handleSelectedActivity = (id: string) => {
    setSelectedActivity(activities.filter(a => a.id === id)[0]);
    setEditMode(false);
  }

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity])
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleEditActivity = (activity: IActivity) => {
    setActivities([...activities.filter(a => a.id !== activity.id), activity])
    setSelectedActivity(activity);
    setEditMode(false);
  }

  const handleDeleteActivity = (id: string) => {
    setActivities([...activities.filter(a => a.id !== id)]);
  }

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then(response => {
      let activities: IActivity[] = [];
      response.data.forEach(activity => {
        activity.date = activity.date.split('.')[0];
        activities.push(activity);
      })

      setActivities(activities);
    });
  },[]);

  // readonly state: IState = {
  //   activities : [],
  // };

  // componentDidMount(){
  //   axios.get<IActivity[]>('http://localhost:5000/api/activities')
  //   .then(response => {
  //     // console.log(response);
      
  //     this.setState({
  //       activities: response.data
  //     });
  //   });
    
    // this.setState({
    //   values: [{id: 1, name: 'Value 101'}, {id:2, name: 'Value 10222'}]
    // })

  //}

    return (
      <Fragment>   
        {/* className="App" */}
      <NavBar OpenCreateForm={handleOpenCreateForm}/>
      <Container style={{marginTop: '5em'}}>
        <ActivityDashboard 
        activities={activities} 
        selectActivity={handleSelectedActivity}
        selectedActivity={selectedActivity}
        editMode={editMode}
        setEditMode={setEditMode}
        setSelectedActivity={setSelectedActivity}
        createActivity={handleCreateActivity}
        editActivity={handleEditActivity}
        deleteActivity={handleDeleteActivity}
        />
      </Container>
      
      </Fragment>   

    );
}

export default App;
