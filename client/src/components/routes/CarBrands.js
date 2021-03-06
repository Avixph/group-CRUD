import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../shared/Layout";
import { getBrands } from "../../services/api-helper";

const CarBrands = () => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    const data = await getBrands();
    // console.log(data.brands);
    setBrands(data.brands);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const showBrands = brands.map((brand) => (
    <li key={brand._id}>
      <NavLink to={`/car-brands/${brand._id}/car-models`}>
        {brand.title}
      </NavLink>
    </li>
  ));

  return (
    <Layout>
      <h3>All Car Brands</h3>
      <ul>{showBrands}</ul>
    </Layout>
  );
};

export default CarBrands;
