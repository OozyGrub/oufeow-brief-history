import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import withCountState from './withCountState';

const Color = ["yellow","grey"];
const BackgroundColor = ["black"]

const Card = styled.div`
  background: ${props => BackgroundColor[props.color]};
  color: ${props => Color[props.count % 2]};
  border-radius: 7px;
  padding: 20px;
  margin: 10px;
  font-size: 16px;
  width: 50%;

`;

const Title = styled.p`
  margin: 0px;
`;
const Number = styled.p`
  margin: 0px;
  font-size: 64px;
`;

const CovidCardNeedingCountState = (props) => {
    return (
      <React.Fragment>
      {
        !props.isLoading ? (
          <Card color="0" count={props.count}>
            <Title>{props.covidTitle}</Title>
            <Number>{props.covidData}</Number>
            <button onClick={props.handleChange}>
              Add {props.covidTitle}
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