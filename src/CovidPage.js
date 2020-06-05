import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'

const Color = ["black","purple"];
const Card = styled.div`
  background: ${props => Color[props.color]};
  color: white;
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;

`;
function CovidPage() {
  // implement hook
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // console.log(count);
    const responseData = fetch("https://covid19.th-stat.com/api/open/today")
    .then(response => {
        response.json().then(data => {
          console.log(data)
          setConfirmedCount(data.Confirmed)
        })
      }
    );
    setIsLoading(false);
    document.title = `There are ${confirmedCount} confirmed patients.`
  }, []);

    return (
      <React.Fragment>
      {
        !isLoading ? (
          <Card color="0">
            <p>Covid Report</p>
            <p>{confirmedCount}</p>
            <button onClick={() => setConfirmedCount(confirmedCount + 1)}>
              Add
            </button>
          </Card>
        ) : (
          <div style={{color: "red"}}>
            <p>Loading...</p>
          </div>
        )
      }
      </React.Fragment>
      
    );
}

export default CovidPage;
