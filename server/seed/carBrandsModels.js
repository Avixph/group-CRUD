const db = require("../db");
const CarBrand = require("../models/carBrand");
const CarModel = require("../models/carModel");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const carBrand1 = await new CarBrand({
    title: "Fiat",
    country_of_origin: "Italy",
    website_link: "https://www.fiatusa.com/",
  });
  carBrand1.save();
  const carBrand2 = await new CarBrand({
    title: "Nissan",
    country_of_origin: "Japan",
    website_link: "https://www.nissanusa.com/",
  });
  carBrand2.save();
  const carBrand3 = await new CarBrand({
    title: "Subaru",
    country_of_origin: "Japan",
    website_link: "https://www.subaru.com/",
  });
  carBrand3.save();
  const carBrand4 = await new CarBrand({
    title: "Mini",
    country_of_origin: "United Kingdom",
    website_link: "https://www.miniusa.com/",
  });
  carBrand4.save();
  const carBrand5 = await new CarBrand({
    title: "Dodge",
    country_of_origin: "United States",
    website_link: "https://www.dodge.com/",
  });
  carBrand5.save();
  const carBrand6 = await new CarBrand({
    title: "Chevrolet",
    country_of_origin: "United States",
    website_link: "https://www.chevrolet.com/",
  });
  carBrand6.save();
  const carBrand7 = await new CarBrand({
    title: "Volkswagen",
    country_of_origin: "German",
    website_link: "https://www.vw.com/en.html",
  });
  carBrand7.save();
  const carBrand8 = await new CarBrand({
    title: "Toyota",
    country_of_origin: "Japan",
    website_link: "https://www.toyota.com/",
  });
  carBrand8.save();
  const carBrand9 = await new CarBrand({
    title: "Kia",
    country_of_origin: "South Korea",
    website_link: "https://www.kia.com/us/en",
  });
  carBrand9.save();
  const carBrand10 = await new CarBrand({
    title: "Hyundai",
    country_of_origin: "South Korea",
    website_link: "https://www.hyundaiusa.com/us/en",
  });
  carBrand10.save();
  const carBrand11 = await new CarBrand({
    title: "Honda",
    country_of_origin: "Japan",
    website_link: "https://www.honda.com/",
  });
  carBrand11.save();
  const carBrand12 = await new CarBrand({
    title: "Mazda",
    country_of_origin: "Japan",
    website_link: "https://www.mazdausa.com/",
  });
  carBrand12.save();

  const carModels = [
    {
      model_name: "FIAT 500X",
      car_type: "Subcompact crossover SUV",
      car_image:
        "https://www.fiatusa.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk7GBfM9IW2VRkr72kVid9pYvwXGXQpMTV1rUEzg6OQCckPquBhS1U%25jzbTllxA0WmNlnIQFmwFDkpd2ATBoM&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=1700&y=1900&w=6500&h=6500",
      car_brand: carBrand1._id,
    },
    {
      model_name: "FIAT 500L",
      car_type: "Compact Minivan",
      car_image:
        "https://www.fiatusa.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVk7GBfM9IW2VRkr72kVid9pMnwXGXQpMTV1rUjLg6OQCckPquBhS1UGbzbTllxA01Hejn0QFmwFEkpd2LYBoMAoj&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=1700&y=1900&w=6500&h=6500",
      car_brand: carBrand1._id,
    },
    {
      model_name: "Nissan GT-R",
      car_type: "Sports Sedan",
      car_image:
        "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/gtr/2021/overview/2021-nissan-gtr-50th-anniversary-edition.jpg",
      car_brand: carBrand2._id,
    },
    {
      model_name: "Nissan Pathfinder",
      car_type: "Compact SUV",
      car_image:
        "https://www.nissanusa.com/content/dam/Nissan/us/vehicles/pathfinder/2020/overview/gallery-promo/red-nissan-pathfinder.png",
      car_brand: carBrand2._id,
    },
    {
      model_name: "Subaru Impreza",
      car_type: "Hatchback",
      car_image:
        "https://www.subaru.com/content/dam/subaru/vehicles/2021/IMP/vsp/exterior-360/NAA/NAA_023.jpg",
      car_brand: carBrand3._id,
    },
    {
      model_name: "Subaru WRX",
      car_type: "Sports Compact",
      car_image:
        "https://www.subaru.com/content/dam/subaru/vehicles/2021/WRX/vsp/exterior-360/M7Y/M7Y_023.jpg",
      car_brand: carBrand3._id,
    },
    {
      model_name: "MINI Cooper SE Hardtop",
      car_type: "Hatchback",
      car_image:
        "https://www.miniusa.com/content/dam/mini/models/special-editions/electric_concept/sop/MINI-BEV-SOP-Incentive-car-1440.jpg.miniusaimg.medium.png",
      car_brand: carBrand4._id,
    },
    {
      model_name: "MINI Clubman",
      car_type: "Sub-compact",
      car_image:
        "https://www.miniusa.com/content/dam/mini/models/clubman/clubman-f54-module.jpg.miniusaimg.medium.png",
      car_brand: carBrand4._id,
    },
    {
      model_name: "Dodge Challenger SRT Hellcat Redeye",
      car_type: "2dr Coupe",
      car_image:
        "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVid9pajwXGXQpMTV1rUp3g6OQCckPquBhS1U%25jzbTllxA0otiadCQFmwFzkpd2DhBoM&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=2150&y=2150&w=6500&h=6500",
      car_brand: carBrand5._id,
    },
    {
      model_name: "Dodge Durango SXT RWD",
      car_type: "mid-size SUV",
      car_image:
        "https://www.dodge.com/mediaserver/iris?COSY-EU-100-1713uLDEMTV1r9s%25WBXaBKFmfKSLC9gIQALMc6UhVkmGBfM9IW2VRkr72kVQd9pivwXGXQpMTV1rUp3g6OQCckPquBhS1U%25MzbTllxA0zmil%253QFmwpDkpd2dTBoMlVT&&pov=fronthero&width=1005&height=400&bkgnd=white&resp=jpg&cut=&x=2150&y=2150&w=6500&h=6500",
      car_brand: carBrand5._id,
    },
    {
      model_name: "Chevrolet Trailblazer",
      car_type: "mid-size SUV",
      car_image:
        "https://www.chevrolet.com/bypass/iframes/gm/chevrolet/2021/trailblazer/colorizer/images/colorizer/trim/activ/ext/2021-trailblazer-colorizer-activ-g5j-gaz-01.jpg",
      car_brand: carBrand6._id,
    },
    {
      model_name: "Chevrolet Malibu",
      car_type: "mid-size Sedan",
      car_image:
        "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2021/cars/malibu/01-images/2021-malibu-1zb69-1vl-gan-trimselector.png?imwidth=628",
      car_brand: carBrand6._id,
    },
    {
      model_name: "Volkswagen Tiguan",
      car_type: "Compact Crossover SUV",
      car_image:
        "https://www.vwimg.com/vw-BW2-my2021/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7AS6yyJ1vTvsd2SlppEKhjTtKSK8Cqk2MM8H2Lvyr0Q%25UOqggAa5hP4KYwqeQeOOnDYyyJ8H3WDZ4HvCJii8meZGoo0gZrnZlO4O6bLKKFNMbTggAcEvvFHOu5ZxxHlZkPF%25uAnW07ZZU8pVfReVMIIrsJYUP3qbCCtBvyr9dyLLyH0kYb9we88WTU9j%25I4bBMdPAA2Zjeqz5qMZKMI7UbSK8C7g2bbO6xDAON9xRSOrr9UOXs3OTMttOtza55P5AR99dJpUZZsoHiiiIE24ffQf8g22UtgYnn4xxPuug5Bq00zJSoFF3WzNxxcOTBBBhfHaTTkln1WWHznKGGKe6aJJMPZ1llvdW8EEL4MjVVbrVyXXYeD8ttOoGv55PHZ699d4dbZZsZs1iiIiuRffQfZr22UDTAnn4z5NuugH1w00z84hFF3UpOxxcGceBBh20ATTkbGrWWHMwDGGKka1JJMXNhllvqMZEELDMcVVbT4NXXY1DmttOq2c55PSsy99dyCqZZsSdCiiIEKgffQLzE22UjMmnn4hGquug5wL00zH8hFF36CkxxcNkHBBhCoUTTkRBTWWHpsDGGKDuEJJMFSbllvqK8EELBljVVbVIyXXYznMttOnZj55PJSi99dlh7ZZsnfUiiILIjffQcmb22UtWYnn4V1puuguLq00zZ2QFF3iuUxxchkqBBhTMrTTkyD9WWHYW3GGKMCFJJMgBullvrUnEEL9fFVVbN9WXXYZzdttOGaZ55PSZw99dgghZZsaxIiiI0MOffQ84t22Uam6nn4nzOuugkBy00z14AFF3FHkxxcm3oBBhBunTTkdTSWWHuEDGGK06bJJMgNyllvrM8EELkgaVVbS6KXXYq%25pttONZp55PG1L99dA7bZZsedViiI3BaffQDi622UbZdnn41G1uugmiL00zKzA&width=864",
      car_brand: carBrand7._id,
    },
    {
      model_name: "Volkswagen Golf GTI",
      car_type: "Hatchback",
      car_image:
        "https://www.vwimg.com/vw-AU2-my2021/iris?COSY-EU-100-1713VV%25lXm0kYNazzSU9mu0fO7AS6yyJ1vTvsd2SlppEKhjTtKSK8CPC2MM8H2Lvyr0Q%25UOqggAa5hP4KYwqeQeOOnabyyJ8H3WDZ4HvCJii8pri0oo0gZrnZlO4O6bLKKFNMbTggAcEvvFHOu5ZxxHlZkPF%25uAnW07ZZU8pVfRD%25xIIrsJYUP01bCCtBvyrm3xLLyH0kYbAwh88WTU9j%25I4bBMdfAA2Zjeqz5qMZKMI7UbSK8C7g2bbOztDAONXdjSmrr9UOXs3OTMttOtzF55PH4I99dJp7ZZsoHiiiIE2HffQonr22U2j5nn45zOuugBBd00zHCuFF3KyPxxcs3eBBhfJoTTkXDBWWHEkeGGKuHmJJM0L7llvtxCEELkxbVVbI2yXXYzLottONts55P%25JR99dKivZZsZ8TiiIzIMffQ49722U2F6nn4nfNuug1Ge00zjj5FF3hikxxcvyRBBhm3oTTkzlvWWHrIvGGK0BoJJMH0Jllvtd4EELdEFVVbTbPXXYheBttOior55P%25%25T99dyOMZZsEhDiiIoFKffQD4722U7Nonn4DUNuugmLw00zHlSFF3ZC7xxcMyHBBhqrKTTklhHWWHSMvGGK6azJJMzB1llvqJcEELR4TVVbjB5XXYWDkttOobp55PJtw99d9gGZZskEOiiIxnwffQXDu22UtMynn4x09uugH7P00zpNiFF3iEsxxc9cRBBhBd1TTknFzWWHuBTGGKMvNJJMRP1llvEjcEELBezVVbIVmXXYOqGttOWXD55PHEI99dehTZZsuxJiiI%25uXffQ0Kb22Utplnn4kkvuugmJz00zp8kFF3G8exxc7vaBBhprnTTkTKuWWHbERGGKwkLJJMJYYllvrM4EELEWaVVbgVRXXYWekttOkoX55PGcw99delMZZsbHpiiI1oOffQ84o22UbmCnn4DLcuug57I00z1OJFF3jzkxxcvVwBBhpx%25TTkQFHWWH757GGK6xIJJMPM1&width=864",
      car_brand: carBrand7._id,
    },
    {
      model_name: "Toyota 86GT",
      car_type: "Sports Sedan",
      car_image:
        "https://www.toyota.com/imgix/responsive/images/mlp/models/2020/86/86gt-side.png?w=516&dpr=1&q=80&fm=webp&lossless=false&fit=max&cs=strip&auto=compress&",
      car_brand: carBrand8._id,
    },
    {
      model_name: "Toyota GR Supra",
      car_type: "Sports Sedan",
      car_image:
        "https://www.toyota.com/imgix/responsive/images/mlp/models/2021/gr-supra/2-side.png?w=888&dpr=1&q=80&fm=webp&lossless=false&fit=max&cs=strip&auto=compress&",
      car_brand: carBrand8._id,
    },
    {
      model_name: "Kia Rio 5-Door",
      car_type: "Hatchback",
      car_image:
        "https://www.kia.com/us/content/dam/kia/us/en/vehicles/rio-5-door/2021/trims/s/exterior/176095/360/01.png/jcr:content/renditions/tablet.png",
      car_brand: carBrand9._id,
    },
    {
      model_name: "Kia Stinger",
      car_type: "Sports Sedan",
      car_image:
        "https://www.kia.com/us/content/dam/kia/us/en/vehicles/stinger/2022/trims/gt2/exterior/1d2e03/360/36.png/jcr:content/renditions/tablet.png",
      car_brand: carBrand9._id,
    },
    {
      model_name: "Hyundai Sonata",
      car_type: "Mid-Size Sedan",
      car_image:
        "https://s7d1.scene7.com/is/image/hyundai/2021-sonata-se-shimmering-silver-pearl:Small-Carousel?fmt=png-alpha",
      car_brand: carBrand10._id,
    },
    {
      model_name: "Hyundai Santa Fe",
      car_type: "5-passenger SUV",
      car_image:
        "https://s7d1.scene7.com/is/image/hyundai/2021-santa-fe-se-stormy-sea-hero:Small-Carousel?fmt=png-alpha",
      car_brand: carBrand10._id,
    },
    {
      model_name: "Hoda Accord",
      car_type: "Mid-Size Sedan",
      car_image:
        "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2021/Accord-Sedan/Color-Selector/Crystal-Black-Pearl/ACS21-207_Touring2T_NH_731P_Crystal-Black-Pearl.png",
      car_brand: carBrand11._id,
    },
    {
      model_name: "Honda CR-V",
      car_type: "SUV",
      car_image:
        "https://automobiles.honda.com/platform/api/v4/images/exterior/02?config=M:RW1H2MEW$EC:NH-830M$HC:undefined$IC:GR$O:$F:FIFS$ECC:SX$ECX:X&width=1400",
      car_brand: carBrand11._id,
    },
    {
      model_name: "Mazda 3",
      car_type: "Sedan",
      car_image:
        "https://www.mazdausa.com/siteassets/vehicles/2021/mazda3-sedan/trims/carousel/2021-mazda-3-sedan-2.0l-package.png?w=767",
      car_brand: carBrand12._id,
    },
    {
      model_name: "Mazda MX-5 Miata",
      car_type: "Sports Roadster",
      car_image:
        "https://www.mazdausa.com/siteassets/vehicles/2021/mx-5-st/trims/carousel/2021-mazda-mx-5-miata-sport.jpg?w=767",
      car_brand: carBrand12._id,
    },
  ];
  await CarModel.insertMany(carModels);
  console.log("Created many cars models");
};

const run = async () => {
  await main();
  db.close();
};
run();
