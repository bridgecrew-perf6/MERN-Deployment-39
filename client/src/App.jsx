import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom/cjs/react-router-dom.min';
import ViewAllPets from './components/ViewAllPets';
import AddNewPet from './components/AddNewPet';
import EditPet from './components/EditPet';
import ViewOnePet from './components/ViewOnePet'

function App() {
  return (
  
    <div className="App container">
      <BrowserRouter>
      <Route exact path ='/'>
        <ViewAllPets></ViewAllPets>
      </Route>
      <Switch>
      <Route exact path = '/pet/addnew'>
      <AddNewPet></AddNewPet>
      </Route>
      <Route exact path = '/pet/update/:id'>
      <EditPet></EditPet>
      </Route>
      <Route exact path = '/pet/view/:id'>
     <ViewOnePet/>
      </Route>


      </Switch>
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
