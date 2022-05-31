import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]= useState("");


    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleClearClick = () =>{
        let newText="";
        setText(newText)
        props.showAlert("All clear","Success");
    }
    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","Success",);
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
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#16466e':'white' , color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>  
            <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.length} characters</p> 
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p> 
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h3>Preview</h3> 
            <p>{text}</p>
        </div>
        </>

    )
}
