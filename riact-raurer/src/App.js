import './App.css';
import Renders from "./components/renders"
import BryntumPruebas from "./components/bryntumPruebas"
import ArrowFunctionVSfunction from "./components/arrowFunctionVSfunction"
import {ConnectedToReduxComp} from "./components/connectedToReduxComp"
import { Route, Switch } from "react-router-dom";

function App() {


  return (
    <div className="App">

    {/* <Switch>
      <Route path="/products" component={ProductsPage} />

     </Switch> */}
      
      {/* <Renders/> */}
    {/* <BryntumPruebas/> */}
    {/* <ArrowFunctionVSfunction/> */}
    <ConnectedToReduxComp/>
    </div>
  );
}

export default App;
