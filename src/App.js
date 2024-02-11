import './App.css';
import React, { useState } from 'react';
import ObjectComp from './components/ObjectComp';
import TextComp from './components/TextComp';



function App() {
  const [text, setText] = useState('First');


  return (
    <div className="App">
      <ObjectComp />
      <TextComp text={text} />

      <input type="text" name="displayText" id="displayText" value={text} onChange={(e) => setText(e.target.value)} />

    </div>
  );
}

export default App;
