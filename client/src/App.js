import "./App.css";
import { Route, withRouter } from "react-router-dom";
import { getBrands, getModels } from "./services/api-helper";

function App() {
  console.log(getBrands);
  console.log(getModels);
  return <div className="App"></div>;
}

export default App;
