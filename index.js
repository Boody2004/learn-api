const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(cors());

app.get("/", (req, res) => {
  const documentation = [
    {
      url: "/info",
      type: "GET",
    },
    {
      url: "/cars",
      type: "GET",
    },
    {
      url: "/drivers",
      type: "GET",
    },
  ];
  res.send(documentation);
});

app.get("/info", (req, res) => {
  res.send({
    info: [
      {
        id: 1,
        imgBg:
          "https://res.cloudinary.com/dirbnpgsp/image/upload/v1645639669/Movies%20App/Tv_Show_jdykim.jpg",
        title: "title",
        subTitle: "subTitle",
        showBtn: "showBtn",
        seeDetailsBtn: "seeDetailsBtn",
      },
    ],
  });
});

app.get("/cars", (req, res) => {
  let carData = JSON.parse(fs.readFileSync("./data/cars.json", "utf-8"));

  res.json(carData);
});

app.get("/drivers", (req, res) => {
  let driverData = JSON.parse(fs.readFileSync("./data/drivers.json", "utf-8"));

  res.json(driverData);
});

app.listen(9000, () => console.log("Listening on port 9000..."));
