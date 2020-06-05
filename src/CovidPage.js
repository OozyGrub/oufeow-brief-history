import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

import CovidCard from './CovidCard';

const Header = styled.h1`
  margin-left: 20%;
  margin-top: 5%;
  font-weight: lighter;
`;

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
        <Header>
          Thai Covid Status
        </Header>
        {/* { Object fetch from API (mapping only array)
          Object.keys(covidData).map((keyName, i) => 
            <div>
              {keyName}:{covidData[keyName]}
            </div>)
        } */}
        {
          Object.keys(covidData).filter((keyName) =>
            covidData[keyName] % parseInt(covidData[keyName]) === 0
          ).sort((a,b) => covidData[b]-covidData[a]).map((keyName, i) => 
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
