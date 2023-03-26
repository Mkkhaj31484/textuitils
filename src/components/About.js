import React, { useState } from "react";

export default function About() {
    const [mode, setMode] = useState({
        color:'red',
        backgroundColor:'black'
    }); 
    const [Dark,setDark] = useState("Enable Light Mode")

     let changemode= ()=>{
        if(mode.color === 'red'){
            setMode({
                color:'black',
                backgroundColor:'white'
               
            })
            setDark("Enable Dark Mode")
            
        }else{
            setMode({
                color:'red',
                backgroundColor:'black'
            })
            setDark(" Enable Light Mode")
        }

     }

    // let mode = {
    //     color:'red',
    //     backgroundColor:'black'
    // }
    return (
        
        
            <div className="container"style={mode}>
                <h2 ClassName = " about my-3">About Us</h2>
            <div className="accordion" id="accordionExample" style={mode}>
                <div className="accordion-item"style={mode}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"  style={mode} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mode}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed"  style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"style={mode}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div ClassName = "container">
                <button className="btn btn-primary mx-2" onClick={changemode}>{Dark}</button>
            </div>
            </div>
        
    )
}
