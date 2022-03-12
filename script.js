// fetch("http://localhost:3000/homeCarouse")
fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("ERROR"));
