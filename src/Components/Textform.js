import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpCase = () => {
        //console.log("hello");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been Capitalized","success");
    }
    const handleLoCase = () => {
        //console.log("hello");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowerCase","success");
    }
    
    const handleOnchange = (event) => {
        //console.log("jjjjj");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    const textToggle=()=>
    {
        if(text===" ")
        {
            console.log("jh")
        }
    }
    
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" onChange={handleOnchange} rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#05111e', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCase} >Convert into UpperCase</button>
                <button className="btn btn-primary" onClick={handleLoCase} >Convert into LowerCase</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleExClick} >Extract Email</button> */}
            </div>
            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>
                    Text Summary
                </h2>
                <p> {text.split(" ").length} words and {text.length} characters {textToggle}</p>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}


