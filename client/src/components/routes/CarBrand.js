import { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import { carBrandUrl } from "../../services/api-helper";

const CarBrand = (props) => {
  const [oneBrand, setOneBrand] = useState({});

  const fetchBrand = async () => {
    const response = await axios
      .get(`${carBrandUrl}/${props.match.params.id}`)
      .then(({ data }) => {
        return data;
      });
    console.log(response.brand);
    setOneBrand(response.brand);
  };

  useEffect(() => {
    fetchBrand();
  }, []);

  return (
    <Layout>
      <h4>{oneBrand.title}</h4>
      <a href={oneBrand.website_link} target="_blank" rel="noreferrer">
        <button>Website</button>
      </a>
      <NavLink to="/car-brands">
        <button>Back to Brands</button>
      </NavLink>
    </Layout>
  );
};
export default CarBrand;
