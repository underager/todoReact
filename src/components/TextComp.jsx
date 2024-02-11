import React from 'react'

function TextComp({text}) {
    let textCompVersion;

    textCompVersion = Math.floor(Math.random() * 1000);
  return (
    <div>
        <h4>Displayed Text</h4>
        <p>{text}</p>
        <p>Text Version : {textCompVersion}</p>
    </div>
  )
}

export default TextComp