import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../shared/Layout";
import CarBrandForm from "../../shared/form/CarBrandForm";
import { carBrandUrl } from "../../../services/api-helper";

const CarBrandEdit = (props) => {
  const brandId = props.match.params.id;
  const [brand, setBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: "",
  });

  const fetchUpdate = async () => {
    const response = await axios
      .get(`${carBrandUrl}/${brandId}`)
      .then(({ data }) => {
        return data;
      });
    setBrand(response.brand);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  // console.log(brand);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedBrand = Object.assign(brand, updatedField);
    console.log(editedBrand);
    setBrand(editedBrand);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${carBrandUrl}/${brandId}`,
      method: "POST",
      data: brand,
    })
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <Layout>
      <h3>Edit Car Brand</h3>
      <CarBrandForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={`/car-brands/${brandId}/car-models`}
      />
    </Layout>
  );
};
export default CarBrandEdit;
