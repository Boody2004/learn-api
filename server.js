/*eslint-disable*/
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors());

app.get("/", (req, res) => {
  const documentation = [
    {
      url: "/info",
      type: "GET",
    },
    {
      url: "/homeCarousel",
      type: "GET",
    },
  ];
  res.send(documentation);
});

app.get("/info", (req, res) => {
  res.send({
    homeCarousel: [
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
    masedge: [
      {
        id: 1,
        title: "title",
        subTitle: "subTitle",
      },
    ],
  });
});

app.get("/homeCarousel", (req, res) => {
  res.send({
    id: 1,
    imgBg:
      "https://res.cloudinary.com/dirbnpgsp/image/upload/v1645639669/Movies%20App/Tv_Show_jdykim.jpg",
    title: "title",
    subTitle: "subTitle",
    showBtn: "showBtn",
    seeDetailsBtn: "seeDetailsBtn",
  });
});

const port = process.env.PORT || 8080;
app.listen(port);
console.log(`app is running on: http://localhost:${port}`);
