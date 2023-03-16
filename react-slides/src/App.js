import './App.css';
import { useState } from 'react';
import { filmData } from './film-data.json'

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
}

let data = filmData[index]


export default App