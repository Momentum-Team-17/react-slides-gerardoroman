import './App.css';
import { useState } from 'react';
import { filmData } from './film-data.json';

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
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleBackClick}>Back</button>
      <button onClick={handleRestartClick}>Restart</button>
      
      <h3>{data.title}</h3>
      <h3>{data.original_title}</h3>
      <h3>{data.realease_date}</h3>
      <h3>{data.description}</h3>
      <div><img src={data.image} alt='cover' /></div>
    </>
  )
}

export default App