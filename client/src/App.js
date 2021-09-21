import { Switch, Route } from 'react-router-dom'
import Add from './screens/Add/Add'

function App() {
  return (
    <Switch>
      <Route exact path = "/add">
        <Add />
      </Route>
    </Switch>
  );
}

export default App;
