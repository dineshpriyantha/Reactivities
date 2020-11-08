import logo from './logo.svg';
import './App.css';
import { cars } from './demo';
import CarItem from './CarItem';

function App() {
  return (
    <div className="App">
       {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
       */}

       <ul>
         {cars.map((car) => {
          //  <li>{car.color}</li> use CarIte Component instead of this 
          <CarItem/>
         })}
       </ul>

    </div>
  );
}

export default App;
