import React, { Component } from "react";
import ButtonRow from "./components/ButtonRow";
import DonutChart from "./components/DonutChart";
// import Graph from "./components/Graph";
import SchoolInfo from "./components/SchoolInfo";
import API from "./utils/API";
import './App.css';

class App extends Component {
  //where relevant data will be stored
  state = {
    school: {},
    latest: {},
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
    .then(res => this.setState({ school: res.data.results[0].school, latest: res.data.results[0].latest, returned: true }))
    .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <SchoolInfo 
        name={this.state.school.name}
        city={this.state.school.city}
        state={this.state.school.state}
        zip={this.state.school.zip}
        website={this.state.school.school_url}
        />
        <DonutChart />
        <ButtonRow />
      </div>
    );
  }

}

export default App;
