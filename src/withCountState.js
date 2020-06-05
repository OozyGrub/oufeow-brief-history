import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddCountButton = styled.button`
  border: none;
  padding: 10px 14px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  background-color: #e7e7e7;
  color: black;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 30px;
`;


function withCountState(WrappedComponent) {
    return function (props) {
        const [count, setCount] = useState(0);
        const handleCountChange = () => {
          setCount(count+1);
        };
        return (
          <CenterDiv>
            <WrappedComponent handleCountChange={handleCountChange} {...props} count={count} setCount={setCount}/>
            {
              !props.isHide ? (
              <Flex>
                <AddCountButton onClick={handleCountChange}>Add Count</AddCountButton>
                <p>{count}</p>
              </Flex>) : <div></div>
            }
          </CenterDiv>
        );
    }
}

export default withCountState;