const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";




function index() {
const url= "http://localhost:5000/constellations"
  axios
  .get(url)
  .then((response)=>{
    const result =response.data.filter((constellation)=>{
      return constellation;
    });
    console.log(result)
  })
  .catch((error)=>{
    console.log(error.message);
  })
}//this function is listing out all the objects using filter

function create(body) {
    const url= "http://localhost:5000/constellations"
  axios
  .post(url, body)
  .then((response)=>{
    console.log(response.data)
  })
}//this function is adding to the array, .post takes the URL and the body input, then response log's the new data added

function show(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios
  .get(url)
  .then((response)=>{
   console.log(response.data)
    })
  .catch((error)=>{
    console.log(error.message)
  })
}//this function is showing the constellation by ID, using get to pull the id from the URL and return the object

function update(id, body) {
 const url = `${BASE_URL}/constellations/${id}`;
  axios
  .put(url, body)
  .then((response)=>{
    console.log(response.data)
    })
    
  .catch((error)=>{
    console.log(error.message)
  })
  
}//this function is updating an object, putting it to the URL with the body input, then response returns the new object

function destroy(id) {
  const url = `${BASE_URL}/constellations/${id}`;
  axios
  .delete(url)
  .then((response)=>{
    const result= response.data
  
  console.log(result)
  })
  .catch((error)=>{
    console.log(error.message)
  })
  }//this is deleting an object based on the id input through the URL
        

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
