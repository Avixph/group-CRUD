import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import CarBrandForm from "../../shared/form/CarBrandForm";
import { getBrands, carBrandUrl } from "../../../services/api-helper";

const CarBrandCreate = (props) => {
  // const brandId = props.match.params.id;
  console.log(props);
  // const [getBrand, setGetBrand] = useState([]);
  const [brand, setBrand] = useState({
    title: "",
    country_of_origin: "",
    website_link: "",
  });
  const [created, setCreated] = useState(null);

  // const fetchBrands = async () => {
  //   const data = await getBrands();
  //   setGetBrands(data.brands);
  // };

  // useEffect(() => {
  //   fetchBrands();
  // }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const newBrand = Object.assign(brand, updatedField);
    console.log(newBrand);
    setBrand(newBrand);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      url: `${carBrandUrl}`,
      method: "POST",
      data: brand,
    })
      .then((res) => setCreated(res.data.brand))
      .catch(console.error);
  };

  if (created) {
    return <Redirect to={`/car-brands`} />;
  }

  return (
    <div>
      <CarBrandForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cancelPath={`/car-brands`}
      />
    </div>
  );
};
export default CarBrandCreate;
