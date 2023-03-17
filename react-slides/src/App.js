import './App.css';
import { useState } from 'react';
import filmData from './film-data.json';

function App() {
  return (
    <div className='section'>
      <div>
        <div>
          {
          <Gallery/>
          }
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
    }

  function handleBackClick() {
    setIndex(index - 1);
  }

  function handleRestartClick() {
    setIndex(0);
  }

let data = filmData[index];
return (
    <>
      <h2 className='title'>{data.title}</h2>
      <h3 className='og-title'>{data.original_title}</h3>
      <h4 className='release-date'>{data.realease_date}</h4>
      <h3 className='description'>{data.description}</h3>
      <div className='image'><img src={data.image} alt='cover' /></div>

      <button onClick={handleBackClick} disabled={index === 0}>Back</button>
      <button onClick={handleRestartClick} disabled={index === 0}>Restart</button>
      <button onClick={handleNextClick} disabled={index === filmData.length - 1}>Next</button>
      
    </>
  )
}

export default App