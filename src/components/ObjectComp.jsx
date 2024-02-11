import React, {useState, memo} from 'react'

const ObjectComp = memo(function () {
    const [personInfo, setPersonInfo] = useState({name: 'John Doe', age: 23})
    let renderTextChangeDetect = 'Indicate change : ';

    renderTextChangeDetect  +=  Math.floor(Math.random() * 1000);
  return (
    <div>
        <h3>Person Info</h3>
        <p>Name : {personInfo?.name}</p><br/>
        <p>Age : {personInfo?.age}</p><br/>
        <p>Gender : {personInfo?.gender || 'NA'}</p>
        <p>Version : {renderTextChangeDetect}</p>
    </div>
  )
})

export default ObjectComp