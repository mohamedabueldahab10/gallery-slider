import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";
import { images } from './Data';
import { projects } from './Data';
const ArrowsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 30px;
  align-items: center;
`;
const MainComponent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
`;
const SliderDots = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  column-gap: 20px;
  align-items: center;
`;

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const NextStep = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };
  const PrevStep = () => {
    const previousIndex = (currentImageIndex + images.length - 1) % images.length;
    setCurrentImageIndex(previousIndex);
  };
  const renderProjects = () => {
    return projects.map((project, index) => (
      <div
        key={index}
        className={`slider-title ${currentImageIndex === index ? 'active-title' : ''}`}
      >
        <div>
        {project.title}
        </div>
        <ArrowsContainer>
        <div>
        <i onClick={PrevStep} className="arrow left"></i>
        </div>
        <div>
        {project.desc}
        </div>
        <div><i onClick={NextStep} className="arrow right"></i></div>
      </ArrowsContainer>
      </div>
    ));
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <div
        className={`slider-image ${currentImageIndex === index ? 'active-img' : ''}`}
        key={index}
        style={{backgroundImage: `url(${image})` }}
        alt={`pic ${index + 1}`}
    />
    ));
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <div
        key={index}
        style={{
          width: '10px',
          height: '10px',
          border: "1px solid",
          borderRadius: '50%',
          borderColor: index === currentImageIndex ? 'aqua' : '#fff',
          background: index === currentImageIndex ? 'aqua' : 'transparent',
          margin: '0 3px',
          cursor: 'pointer',
        }}
        onClick={() => setCurrentImageIndex(index)}
      />
    ))
  }
  return (
    <MainComponent>    
    <div className="slider-container">
      <div className="slider-images">
        {renderImages()}
      </div>
      <div className="title-container">
      <div className="slider-titles">{renderProjects()}</div>
      </div>
    </div>
      <SliderDots>
      {renderDots()}
      </SliderDots>
    </MainComponent>

  );
};

export default App;