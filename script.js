// fetch("http://localhost:3000/homeCarouse")
fetch("http://localhost:3000/info")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
