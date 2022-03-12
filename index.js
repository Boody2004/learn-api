const express = require("express");
const app = express();

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
  });
});

app.get("/homeCarousel", (req, res) => {
  res.send([
    {
      id: 1,
      imgBg:
        "https://res.cloudinary.com/dirbnpgsp/image/upload/v1645639669/Movies%20App/Tv_Show_jdykim.jpg",
      title: "title",
      subTitle: "subTitle",
      showBtn: "showBtn",
      seeDetailsBtn: "seeDetailsBtn",
    },
  ]);
});

app.listen(8000, () => console.log("Listening on port 8000..."));
