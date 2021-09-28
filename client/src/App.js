import { Switch, Route } from "react-router-dom";
import Add from "./screens/Add/Add";
import Layout from "./components/Layout/components";
import DashBoard from "./screens/DashBoard/DashBoard";
import Receipt from "./screens/Receipt/Receipt"

function App() {
  return (
    <Switch>
      <Layout>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path='/receipt/:id'>
          <Receipt/>
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
