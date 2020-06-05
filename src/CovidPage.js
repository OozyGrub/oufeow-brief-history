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
        {/* { Object fetch from API (mapping only array)
          Object.keys(covidData).map((keyName, i) => 
            <div>
              {keyName}:{covidData[keyName]}
            </div>)
        } */}
        {
          Object.keys(covidData).map((keyName, i) => 
            <CovidCard
              isHide
              key={keyName}
              covidTitle={keyName}
              covidData={covidData[keyName]}
              isLoading={isLoading}
              handleChange={
                () => {
                  covidData[keyName] += 1; 
                  setCovidData({...covidData })
                }
              }
              >
              {keyName} : {covidData[keyName]}
            </CovidCard>
          )
        }
      </React.Fragment>
      
    );
}

export default CovidPage;
