import './Styles/index.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
//Components 
import Meals from './Components/Meals';
import Meal from './Components/Meal';
import Header from './Components/Header'
function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/'>
        <Meals></Meals>
      </Route>
      <Route path="/meal/:id" children={<Meal />} />
    </Router>
  );
}

export default App;