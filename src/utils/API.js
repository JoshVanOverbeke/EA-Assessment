import axios from "axios";
const BASEURL = "https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=";
const APIKEY = "guDWfas33s4yfX4wQKXef91fKWZ5jayKS1CCD5w3";

export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
  
};