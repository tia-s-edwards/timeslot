import './App.css';
import Header from './components/Header';
import AddTimeSlot from './components/AddTimeSlot'
import TimeSlotList from './components/TimeSlotList';
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import useLocalStorage from './hooks/useLocalStorage';
import EditTimeSlot from './components/EditTimeSlot';

function App() {
  const [activities, setActivities] = useLocalStorage('activities', []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route 
              render={(props)=>(
                <TimeSlotList {...props} activities={activities} setActivities={setActivities}/>
              )}
              path="/"
              exact={true}
            />
            <Route 
              render={(props)=>(
                <AddTimeSlot {...props} activities={activities} setActivities={setActivities}/>
              )}
              path="/add-timeslot"
            />
            <Route
              render={(props) => (
              <EditTimeSlot {...props} activities={activities} setActivities={setActivities} />
              )}
              path="/edit/:id"
            />
            <Route component={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
