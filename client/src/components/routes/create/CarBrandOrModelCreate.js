import Layout from "../../shared/Layout";
import CarBrandCreate from "./CarBrandCreate";
import CarModelCreate from "./CarModelCreate";

const CarBrandOrModelCreate = () => {
  return (
    <Layout>
      <h3>Add to CRUD</h3>
      <h4>+ New Brand </h4>
      <CarBrandCreate />
      <h4>+ New Model </h4>
      <CarModelCreate />
    </Layout>
  );
};
export default CarBrandOrModelCreate;
