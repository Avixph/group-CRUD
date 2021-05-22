import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import { carBrandUrl, getModels } from "../../services/api-helper";

const CarBrand = (props) => {
  // console.log(props);
  const brandId = props.match.params.id;
  const [oneBrand, setOneBrand] = useState({});
  const [brandModels, setBrandModels] = useState([]);

  const fetchBrand = async () => {
    const response = await axios
      .get(`${carBrandUrl}/${brandId}`)
      .then(({ data }) => {
        return data;
      });
    // console.log(response.brand);
    setOneBrand(response.brand);
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  const fetchModelsbyBrand = async () => {
    const data = await getModels();
    // console.log(data.cars);
    setBrandModels(data.cars);
  };

  useEffect(() => {
    fetchModelsbyBrand();
  }, []);

  const showCars = brandModels.map((brandModel) => (
    <ul key={brandModel._id}>
      {brandModel.car_brand === brandId ? (
        <li>
          <NavLink
            to={`/car-brands/${oneBrand._id}/car-models/${brandModel._id}`}
          >
            {brandModel.model_name}
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </ul>
  ));

  // console.log(oneBrand._id);

  return (
    <Layout>
      <h4>{oneBrand.title}</h4>
      <h5>
        Country of Origin: <br /> {oneBrand.country_of_origin}
      </h5>
      <a href={oneBrand.website_link} target="_blank" rel="noreferrer">
        <button>Website</button>
      </a>
      <NavLink to={`/car-brands/${oneBrand._id}/edit-car-brand`}>
        <button>Edit</button>
      </NavLink>
      <NavLink to="/car-brands">
        <button>Back to Brands</button>
      </NavLink>
      <div>{showCars}</div>
    </Layout>
  );
};
export default CarBrand;
