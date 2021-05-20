import axios from "axios";

export const carBrandUrl = "https://cargroupcrud.herokuapp.com/api/carBrands";
export const carModelUrl = "https://cargroupcrud.herokuapp.com/api/carModels";

export const getBrands = async () => {
  const response = await axios.get(carBrandUrl).then(({ data }) => {
    return data;
  });
  console.log(response);
  return response;
};

// export const getOneBrand = async () => {
//   const response = await axios
//     .get(`carBrandUrl/609c8aaf2116b17aad5c90bc`)
//     .then(({ data }) => {
//       return data;
//     });
//   console.log(response);
//   return response;
// };

export const getModels = async () => {
  const response = await axios.get(carModelUrl).then(({ data }) => {
    return data.cars;
  });
  console.log(response);
  return response;
};
