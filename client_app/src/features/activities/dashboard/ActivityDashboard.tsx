import React from 'react';
import { Dropdown, Feed, Grid, Icon, Menu } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import { ActivityForm } from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface IProps{
    activities: IActivity[];
    selectActivity: (id: string) => void;
    selectedActivity: IActivity | null;
    editMode: boolean;
    setEditMode: (editMode:boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
    activities, 
    selectActivity, 
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity}) => {
    
    //const[activeMenu, setActiveMenu] =  useState();
    
    const add = () => {
        console.log('hello');
    };
    
    return (
        
        <Grid>
            <Grid.Column width={3}>

            <Menu secondary vertical>
        <Menu.Item
            name='account'
          //className={activeMenu =='account' ? '' :''}
          
        //   active={activeItem === 'account'}
          //onClick={() => {setActiveMenu('account')}}
          onClick={add}
        />
        <Menu.Item
          name='settings'
        //   active={activeItem === 'settings'}
          onClick={add}
        />
        <Dropdown item text='Display Options'>
          <Dropdown.Menu>
            <Dropdown.Header>Text Size</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
                <Feed>
                <Feed.Event>
                <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                    <Feed.User>Elliot Fu</Feed.User> added you as a friend
                    <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                    <Feed.Like>
                        <Icon name='like' />4 Likes
                    </Feed.Like>
                    </Feed.Meta>
                </Feed.Content>
                </Feed.Event>

                <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <Feed.Date>4 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
          <a>
            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />1 Like
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event> 

    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary
          date='2 Days Ago'
          user='Jenny Hess'
          content='add you as a friend'
        />
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />8 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />5 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
                </Feed>
            </Grid.Column>
            <Grid.Column 
                width={8} >
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}/>           
            </Grid.Column>
            <Grid.Column width={5}>
                {selectedActivity && !editMode && (
                <ActivityDetails activity={selectedActivity} 
                                 setEditMode={setEditMode} 
                                 setSelectedActivity={setSelectedActivity}/>)}
                {editMode && (
                  <ActivityForm 
                  key = {selectedActivity && selectedActivity.id || 0}
                  setEditMode={setEditMode} 
                  activity={selectedActivity!} 
                  createActivity={createActivity} 
                  editActivity={editActivity}
                  />)}
            </Grid.Column>
        </Grid>
    )
}

export default ActivityDashboard