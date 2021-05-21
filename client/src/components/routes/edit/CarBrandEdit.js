import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Layout from "../../shared/Layout";
import CarBrandForm from "../../shared/form/CarBrandForm";
import { carBrandUrl, getModels } from "../../../services/api-helper";

const CarBrandEdit = (props) => {
  const brandId = props.match.params.id;
  console.log(brandId);
  const [brand, setBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: "",
  });
  console.log(brand);
  const [updated, setUpdated] = useState(false);

  const fetchUpdate = async () => {
    try {
      const response = await axios
        .get(`${carBrandUrl}/${brandId}`)
        .then(({ data }) => {
          return data;
        });
      console.log(response.brand);
      setBrand(response.brand);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    console.log(updatedField);
    const editedBrand = Object.assign(brand, updatedField);
    setBrand(editedBrand);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `${carBrandUrl}/${brandId}`,
      method: "POST",
      data: brand,
    })
      .then((res) => console.log(res), setUpdated(true))
      .catch(console.error);
  };

  // if (updated) {
  //   return <Redirect to={`/car-brands/${brandId}/edit-car-brand`} />;
  // }

  return (
    <Layout>
      <CarBrandForm
        handleSubmit={handleSubmit}
        handlechange={handleChange}
        cancelPath={`/car-brands/${brandId}/car-models`}
      />
    </Layout>
  );
};
export default CarBrandEdit;
