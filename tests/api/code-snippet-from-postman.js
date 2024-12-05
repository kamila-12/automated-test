const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://lalafo.kg/api/catalog/v3/params/filter?category_id=4327", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));