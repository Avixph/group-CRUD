import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Layout from "../../shared/Layout";
import CarBrandForm from "../../shared/form/CarBrandForm";
import { carBrandUrl, getModels } from "../../../services/api-helper";

const CarBrandEdit = (props) => {
  console.log(props);
  const [editBrand, setEditBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: "",
  });
  const [updated, setUpdated] = useState(false);

  return (
    <Layout>
      <CarBrandForm />
    </Layout>
  );
};
export default CarBrandEdit;
