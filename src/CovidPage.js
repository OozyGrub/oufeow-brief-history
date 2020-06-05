import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

import CovidCard from './CovidCard';


function CovidPage() {
  const [covidData, setCovidData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(false);

  useEffect(() => {
    const responseData = fetch("https://covid19.th-stat.com/api/open/today")
    .then(response => {
        response.json().then(data => {
          setCovidData(data);
        })
      }
    );
    setIsLoading(false);
    document.title = `There are ${covidData.Confirmed} confirmed patients.`
  },[]);

  console.log(covidData);

    return (
      <React.Fragment>
        <h4>
          Thai Covid Status
        </h4>
        <CovidCard
          covidTitle="Confirmed"
          covidData={covidData.Confirmed}
          isLoading={isLoading}
          handleChange={()=>{
            setCovidData({...covidData, Confirmed: covidData.Confirmed+1})
          }}
        />

        <CovidCard
          covidTitle="Hospitalized"
          covidData={covidData.Hospitalized}
          isLoading={isLoading}
          handleChange={()=>{
            setCovidData({...covidData, Hospitalized: covidData.Hospitalized+1})
          }}
        />

        <CovidCard
          covidTitle="Recovered"
          covidData={covidData.Recovered}
          isLoading={isLoading}
          handleChange={()=>{
            setCovidData({...covidData, Recovered: covidData.Recovered+1})
          }}
        />  

        <CovidCard
          covidTitle="Deaths"
          covidData={covidData.Deaths}
          isLoading={isLoading}
          handleChange={()=>{
            setCovidData({...covidData, Deaths: covidData.Deaths+1})
          }}
        />
        
      </React.Fragment>
      
    );
}

export default CovidPage;
