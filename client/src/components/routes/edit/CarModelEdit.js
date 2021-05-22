import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../shared/Layout";
import CarModelForm from "../../shared/form/CarModelForm";
import { carModelUrl } from "../../../services/api-helper";

const CarModelEdit = (props) => {
  const modelId = props.match.params.id;
  const [model, setModel] = useState({
    model_name: "",
    car_type: "",
    car_image: "",
    car_brand: "",
  });

  const fetchUpdate = async () => {
    const response = await axios
      .get(`${carModelUrl}/${modelId}`)
      .then(({ data }) => {
        return data;
      });
    setModel(response.car);
  };
  useEffect(() => {
    fetchUpdate();
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedModel = Object.assign(model, updatedField);
    console.log(editedModel);
    setModel(editedModel);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${carModelUrl}/${modelId}`,
      method: "POST",
      data: model,
    })
      .then((res) => console.log(res))
      .catch(console.error);
  };

  return (
    <Layout>
      <h3>Edit Car Model</h3>
      <CarModelForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={`/car-brands/${model._id}/car-models/${modelId}`}
      />
    </Layout>
  );
};
export default CarModelEdit;
