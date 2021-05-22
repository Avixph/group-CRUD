import { NavLink } from "react-router-dom";

const CarBrandForm = ({ handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onClick={handleSubmit}>
      <label>Title:</label>
      <input placeholder="Brand Name" onChange={handleChange} name="title" />
      <label>Origin:</label>
      <input
        placeholder="Country of Origin"
        onChange={handleChange}
        name="country_of_origin"
      />
      <label>Website:</label>
      <input
        placeholder="http://carlink.com"
        onChange={handleChange}
        name="website_link"
      />
      <NavLink to={cancelPath}>
        <button>Cancel</button>
      </NavLink>
      <input type="submit" />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default CarBrandForm;
