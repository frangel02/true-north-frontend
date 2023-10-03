import axios from "axios";

export default {
  add: (param1, param2) => 
    axios.get(`/api/v1/calculator/addition?param1=${param1}&param2=${param2}`),
  subtract: (param1, param2) => 
    axios.get(`/api/v1/calculator/subtraction?param1=${param1}&param2=${param2}`),
  multiply: (param1, param2) => 
    axios.get(`/api/v1/calculator/multiplication?param1=${param1}&param2=${param2}`),
  divide: (param1, param2) => 
    axios.get(`/api/v1/nocalculator/division?param1=${param1}&param2=${param2}`)
};
