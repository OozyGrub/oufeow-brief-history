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

function CovidCard(props) {
    return (
      <React.Fragment>
      {
        !props.isLoading ? (
          <Card color="0">
            <p>{props.covidTitle}</p>
            <p>{props.covidData}</p>
            <button onClick={props.handleChange}>
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
};

const CovidCard = withCountState(CovidCardNeedingCountState);
export default CovidCard;