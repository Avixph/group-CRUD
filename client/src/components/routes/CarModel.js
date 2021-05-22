import { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import { carModelUrl } from "../../services/api-helper";

const CarModel = (props) => {
  // console.log(props);
  const modelId = props.match.params.id;
  const [oneModel, setOneModel] = useState({});
  const [deletedModel, setDeletedModel] = useState(false);

  const fetchModel = async () => {
    const response = await axios
      .get(`${carModelUrl}/${modelId}`)
      .then(({ data }) => {
        return data;
      });
    // console.log(response.car);
    setOneModel(response.car);
  };

  useEffect(() => {
    fetchModel();
  }, []);

  const deleteModel = async () => {
    await axios({
      url: `${carModelUrl}/${modelId}`,
      method: "DELETE",
    })
      .then(() => {
        setDeletedModel(true);
      })
      .catch(console.error);
  };

  if (!oneModel) {
    return <p>Loading...</p>;
  }
  if (deletedModel) {
    return (
      <Redirect to={{ pathname: "/", deleted: { msg: "Model deleted!" } }} />
    );
  }

  return (
    <Layout>
      <h4>{oneModel.model_name}</h4>
      <h5>
        Car Type: <br /> {oneModel.car_type}
      </h5>
      <img
        src={oneModel.car_image ? oneModel.car_image : null}
        alt=""
        style={{ width: "50%" }}
      />
      <NavLink
        to={`/car-brands/${oneModel.car_brand}/car-models/${oneModel._id}/edit-car-model`}
      >
        <button>Edit</button>
      </NavLink>
      <button onClick={deleteModel}>Delete</button>
      <NavLink to={`/car-brands/${oneModel.car_brand}/car-models`}>
        <button>Back</button>
      </NavLink>
    </Layout>
  );
};

export default CarModel;
