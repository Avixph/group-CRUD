import { NavLink } from "react-router-dom";

const CarBrandForm = ({ handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <h4>Enter a New Car Brand</h4>
      <form onClick={handleSubmit}>
        <label>Title:</label>
        <input placeholder="Brand Name" name="title" onChange={handleChange} />
        <label>Origin:</label>
        <input
          placeholder="Country of Origin"
          name="country_of_origin"
          onChange={handleChange}
        />
        <label>Website:</label>
        <input
          placeholder="http://carlink.com"
          name="website_link"
          onChange={handleChange}
        />
        <NavLink to={cancelPath}>
          <button>Cancel</button>
        </NavLink>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarBrandForm;
