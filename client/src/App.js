import "./App.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./components/routes/Home";
import CarBrands from "./components/routes/CarBrands";
import CarBrand from "./components/routes/CarBrand";
import CarModel from "./components/routes/CarModel";
import CarBrandEdit from "./components/routes/edit/CarBrandEdit";
import CarModelEdit from "./components/routes/edit/CarModelEdit";
import CarBrandOrModelCreate from "./components/routes/create/CarBrandOrModelCreate";

function App() {
  return (
    <div className="App">
      {/* <h3>{props.location.state ? props.location.state.msg : null}</h3> */}
      <Route exact path="/" component={Home} />
      <Route exact path="/car-brands" component={CarBrands} />
      <Route
        exact
        path="/add-car-brand-or-model"
        component={CarBrandOrModelCreate}
      />
      <Route
        exact
        path="/car-models/:id/edit-car-model"
        component={CarModelEdit}
      />
      <Route
        exact
        path="/car-brands/:id/edit-car-brand"
        component={CarBrandEdit}
      />
      <Route exact path="/car-brands/:id/car-models" component={CarBrand} />
      <Route exact path="/car-brands/:id/car-models/:id" component={CarModel} />
    </div>
  );
}

export default withRouter(App);
