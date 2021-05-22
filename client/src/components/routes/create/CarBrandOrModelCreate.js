import Layout from "../../shared/Layout";
import CarBrandCreate from "./CarBrandCreate";

const CarBrandOrModelCreate = () => {
  return (
    <Layout>
      <h4>Add a New Car Brand </h4>
      <CarBrandCreate />
      <h4>Add a New Car Model </h4>
    </Layout>
  );
};
export default CarBrandOrModelCreate;
