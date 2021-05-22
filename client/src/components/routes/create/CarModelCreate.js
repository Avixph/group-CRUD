import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import CarModelForm from "../../shared/form/CarModelForm";
import { carModelUrl } from "../../../services/api-helper";

const CarModelCreate = (props) => {
  const [model, setModel] = useState({
    model_name: "",
    car_type: "",
    car_image: "",
    car_brand: "",
  });
  const [created, setCreated] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedModel = Object.assign(model, updatedField);
    console.log(editedModel);
    setModel(editedModel);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${carModelUrl}`,
      method: "POST",
      data: model,
    })
      .then((res) => console.log(res))
      .catch(console.error);
  };

  if (created) {
    return <Redirect to={`/`} />;
  }

  return (
    <div>
      <CarModelForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={`/`}
      />
    </div>
  );
};
export default CarModelCreate;
