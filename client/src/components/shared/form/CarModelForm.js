import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getBrands } from "../../../services/api-helper";

const CarModelForm = ({ handleSubmit, handleChange, cancelPath }) => {
  const [allBrands, setAllBrands] = useState([]);
  const [select, setSelect] = useState("");
  console.log(select);
  const fetchBrands = async () => {
    const data = await getBrands();
    console.log(data.brands);
    setAllBrands(data.brands);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const showBrands = allBrands.map((brand) => (
    <option value={brand._id} key={brand._id}>
      {brand.title}
    </option>
  ));
  console.log(showBrands);

  return (
    <form onClick={handleSubmit}>
      <label>Name:</label>
      <input placeholder="Model Name" name="model_name" />
      <label>Type:</label>
      <input placeholder="Model Type" onChange={handleChange} name="car_type" />
      <label>Image:</label>
      <input
        placeholder="http://carimage.com"
        onChange={handleChange}
        name="car_image"
      />
      <select
        placeholder="Brand"
        onChange={handleChange}
        name="car_brand"
        type="text"
      >
        <option disabled selected>
          Brand Name
        </option>
        <>{showBrands}</>
      </select>

      <NavLink to={cancelPath}>
        <button>Cancel</button>
      </NavLink>
      <input type="submit" />
    </form>
  );
};

export default CarModelForm;
