import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import ButtonPrint from "./components/ButtonPrint";
import ButtonDownload from "./components/ButtonDownload";
import DonutChart from "./components/DonutChart";
import BarChart from "./components/BarChart";
import SchoolInfo from "./components/SchoolInfo";
import API from "./utils/API";
import './App.css';
import Pdf from "react-to-pdf";

//variables for the donut charts
const ethLabels = ["AIAN", "Asian", "Black", "Hispanic", "NHPI", "Non-Resident Alien", "Two or More", "Unknown", "White"];
const ethBGColor = ["#E081A2","#BD8FBE","#8C9ECA","#56A9C0","#3BAFA5","#54AF81","#7CAB5E","#A4A248","#C89548"];
const ethHBGColor =["#BC6A5A","#B5687A","#967193","#687D9B","#3E848C","#3A856D","#58814C","#797836","#966B36"];
const proBGColor = ["#EE8874","#E8817F","#DE7D8A","#D17B93","#C17B9A","#AE7B9F","#997CA1","#837DA0","#6D7C9C","#597B94","#467A8A","#37777E","#2E7371","#2C6F63","#2E6A55","#346547","#3A5F3B","#405930","#455327","#494C20","#4D451C","#4F3E19","#4F3819","#4F311A","#4C2C1C"];
const proHBGColor = ["#3A1D19","#412021","#47242A","#4B2934","#4D2F3E","#4D3648","#4B3D51","#47455A","#414D61","#3B5566","#335D69","#2D646A","#2A6B69","#2D7266","#357861","#427E5A","#518354","#61874D","#748B47","#878E42","#9B9041","#AF9143","#C39149","#D69153","#E89061"];
let   proData = [];
let   proLabels = [];
let   tuiData = [];
let   tuiLabels = [];
//obj for cleaning out null, undefined or 0 variables from datasets
let   cleanObj = {};
const ref = React.createRef();
//option set for the pdf downloader
const options = {
  orientation: 'portrait',
  unit: 'in',
  format: [1600,1150]
};


class App extends Component {
  //where relevant data will be stored
  state = {
    school: {},
    enrollment:"",
    ethnicity: {},
    latest: {},
    ethArray: [],
    proObj: {},
    tuition: {},
    returned: false
  };
  //once page is loaded and the app mounts, run the function to search and save the data

  componentDidMount() {
    this.getInfo("");

  }

  //function that searches for the API data and saves it
  getInfo = query => {
    //Api search to grab the data for the webpage
    API.search(query)

    //save the data searched in the state object
    .then(res => 
      this.setState({ 
        school: res.data.results[0].school, 
        enrollment: res.data.results[0].latest.student.enrollment.all,
        ethnicity: res.data.results[0].latest.student.demographics.race_ethnicity,
        latest: res.data.results[0].latest,
        ethArray: this.state.ethArray.concat([
          res.data.results[0].latest.student.demographics.race_ethnicity.aian,
          res.data.results[0].latest.student.demographics.race_ethnicity.asian,
          res.data.results[0].latest.student.demographics.race_ethnicity.black,
          res.data.results[0].latest.student.demographics.race_ethnicity.hispanic,
          res.data.results[0].latest.student.demographics.race_ethnicity.nhpi,
          res.data.results[0].latest.student.demographics.race_ethnicity.non_resident_alien,
          res.data.results[0].latest.student.demographics.race_ethnicity.two_or_more,
          res.data.results[0].latest.student.demographics.race_ethnicity.unknown,
          res.data.results[0].latest.student.demographics.race_ethnicity.white
        ]),
        proObj: res.data.results[0].latest.academics.program_percentage, 
        tuition: res.data.results[0].latest.cost.tuition,
        returned: true 
      })
    )
    .catch(err => console.log(err));
  };

  //function that removes nulls, undefineds, and 0 from object datasets
  clean = obj => {
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === parseFloat(0)) {
        delete obj[propName];
      }
    }
  }
  regex = array => {
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].toString().replace(/_/g, " ");
    };
  }
  render() {
    //removes nulls, undefineds and 0's from program percentage object
    cleanObj = this.state.proObj;
    this.clean(cleanObj);
    //set proData and proLabels from objects into arrays that can be used in donut chart
    proData = Object.values(cleanObj);
    proLabels = Object.keys(cleanObj);
    this.regex(proLabels);
    
    // Do the same for tuition data as above
    cleanObj = this.state.tuition;
    this.clean(cleanObj);
    tuiData = Object.values(cleanObj);
    tuiLabels = Object.keys(cleanObj);
    this.regex(tuiLabels);

    return (
      <div className="container" ref = {ref}>
        <SchoolInfo 
        name={this.state.school.name}
        stuTotal={this.state.enrollment}
        city={this.state.school.city}
        state={this.state.school.state}
        zip={this.state.school.zip}
        website={this.state.school.school_url}
        />
        <MDBContainer>
          <DonutChart 
          chartTitle= "Program Percentages"
          data = {proData}
          labels={proLabels}
          BGColor={proBGColor}
          HBGColor={proHBGColor}
          />
        </MDBContainer>
        <MDBContainer>
          <DonutChart 
          chartTitle= "Race/Ethnicity"
          data = {this.state.ethArray}
          labels={ethLabels}
          BGColor={ethBGColor}
          HBGColor={ethHBGColor}
          />
        </MDBContainer>
        <MDBContainer>
          <BarChart 
          chartTitle= "In-state vs Out-of-state Tuition Cost"
          data= {tuiData}
          labels= {tuiLabels}
          label= "Dollars per Academic Year"
          />
        </MDBContainer>
        <div className="row text-center">
          <ButtonPrint />
          <ButtonDownload />
          <div className="col-4">
            <Pdf  targetRef={ref} filename="ea-assessment.pdf" options={options} x={0.5} y={0.5}>
              {({ toPdf }) => <button onClick={toPdf}>Save as Pdf</button>}
            </Pdf>
          </div>
        </div>

      </div>
    );
  }

}

export default App;
