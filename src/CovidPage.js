import React, {useState, useEffect} from 'react';
import './App.css';

function CovidPage() {
  // implement hook
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
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
  });

    return (
      <React.Fragment>
      {
        !isLoading ? (
          <div>
            <p>Covid Report</p>
            <p>{confirmedCount}</p>
            <button onClick={() => setConfirmedCount(confirmedCount + 1)}>
              Add
            </button>
          </div>
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
