import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]= useState("");


    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        let newText="";
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event) =>{
        console.log("On Change");
        setText(event.target.value)
    }
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>  
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.length} characters</p> 
            <p>{text.split(" ").length} words</p> 
            <p>{0.008*text.split(" ").length} minutes read</p>
            <h3>Preview</h3> 
            <p>{text}</p>
        </div>
        </>

    )
}
