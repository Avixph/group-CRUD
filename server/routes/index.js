const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/carBrands", controllers.createBrand);

router.get("/carBrands", controllers.getAllBrands);

router.get("/carBrands/:id", controllers.getBrandByID);

router.put("/carBrands/:id", controllers.updateBrand);

router.delete("/carBrands/:id", controllers.deleteBrand);

/************************/
router.get("/carModels/:id/carBrands", controllers.getAllCarsByBrands);
/************************/

router.post("/carModels", controllers.createCar);

router.get("/carModels", controllers.getAllCars);

router.get("/carModels/:id", controllers.getCarByID);

router.put("/carModels/:id", controllers.updateCar);

router.delete("/carModels/:id", controllers.deleteCar);

module.exports = router;
