import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked " + text  )
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLwClick = ()=>{
        //console.log("LowerCase was clicked " + text  )
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleCtClick = ()=>{
        //console.log("LowerCase was clicked " + text  )
        let newText = ('')
        setText(newText)
        props.showAlert("Cleared", "success")
    }
    const handleOnChange = (event)=>{
        //console.log("OnChange clicked");
        setText(event.target.value);

    }
  const [text, setText] = useState('');
  return (
    <>
    <div className='conatainer' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='#042743'?'grey':'white', color: props.mode==='dark'?'dark':'dark'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
            <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={handleLwClick}>Convert to LowerCase</button>
            <button className="btn btn-primary " onClick={handleCtClick}>Clear text</button>
       
    </div>
    <div className='conatiner my-3'style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summanry</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
    <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
