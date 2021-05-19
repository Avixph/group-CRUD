import axios from "axios";

let carBrandUrl = "https://cargroupcrud.herokuapp.com/api/carBrands";
let carModelUrl = "https://cargroupcrud.herokuapp.com/api/carModels";

export const getBrands = async () => {
  const response = await axios.get(carBrandUrl).then(({ data }) => {
    return data.brands;
  });
  console.log(response);
  return response;
};

export const getModels = async () => {
  const response = await axios.get(carModelUrl).then(({ data }) => {
    return data.cars;
  });
  console.log(response);
  return response;
};
