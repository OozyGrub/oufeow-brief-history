import React from 'react';
import photo from './myphoto.jpg';
import './App.css';

function HomePage() {
  return (
      <div className="App">
        <header className="App-header">
          {/* <div className = "image-cropper">
            <img src={photo} className="App-logo" alt="logo"/>
          </div> */}
          <p className="pb-2 mb-0">
            KRIT KRUAYKITANON
          </p>
          <a
            className="App-link"
            href="https://drive.google.com/file/d/1LjPYSx9O7_CSkMIyv2lNphNxdTAmpSag/view?usp=sharing"
          >
            My Resume
          </a>
        </header>
      </div>
  );
}

export default HomePage;
