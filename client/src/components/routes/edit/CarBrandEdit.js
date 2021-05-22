import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Layout from "../../shared/Layout";
import CarBrandForm from "../../shared/form/CarBrandForm";
import { carBrandUrl, getModels } from "../../../services/api-helper";

const CarBrandEdit = (props) => {
  const brandId = props.match.params.id;
  // console.log(brandId);
  const [brand, setBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: "",
  });
  // console.log(brand);
  const [updated, setUpdated] = useState(false);

  const fetchUpdate = async () => {
    // try {
    //   const response = await axios
    //     .get(`${carBrandUrl}/${brandId}`)
    //     .then(({ data }) => {
    //       return data;
    //     });
    //   // console.log(response.brand);
    //   setBrand(response.brand);
    // } catch (error) {
    //   console.error(error);
    // }
    const response = await axios.get(`${carBrandUrl}/${brandId}`);
    setBrand(response.data.brand);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  console.log(brand);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    console.log(updatedField);
    const editedBrand = Object.assign(brand, updatedField);
    setBrand(editedBrand);
  };

  // const handleSubmit = () => {};
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `${carBrandUrl}/${brandId}`,
      method: "POST",
      data: brand,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  console.log(updated);

  useEffect(() => {
    if (updated) {
      return <Redirect to={`/car-brands/${brandId}/edit-car-brand`} />;
    }
  }, [updated]);

  return (
    <Layout>
      <CarBrandForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={`/car-brands/${brandId}/car-models`}
      />
    </Layout>
  );
};
export default CarBrandEdit;
