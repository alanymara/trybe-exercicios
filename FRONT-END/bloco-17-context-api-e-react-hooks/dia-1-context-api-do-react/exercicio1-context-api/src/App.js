
import './App.css';
import ToDo from './context/ToDo';
import Form from './Form';
import List from './List';

function App() {
  return (
    <div className="App">
      <ToDo>
        <Form />
        <List />
      </ToDo>
    </div>
  );
}

export default App;
