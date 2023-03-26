import React, { useState } from "react";
export default function TextArea(props) {

    const [text, setText] = useState("");
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);

    const handleclickedup = () => {
        //console.log("upper case was clicked ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", 'success');
    }
    const handleclicked = () => {
        //console.log("upper case was clicked ");
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", 'success');
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        if (text === " ") {
            window.speechSynthesis.speak();
        }
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Performing Speak", 'success');

    }

    const cleartext = () => {
        //console.log("upper case was clicked ");

        let myText = text.toLocaleLowerCase();
        myText = '';
        setText(myText);
        props.showAlert("Text has been cleared", 'success');
    }

    const copy = async () => {
        try {
            await
                navigator.clipboard.writeText(text);
            // console.log(" content copied to clipboard");
        } catch (err) {
            // console.error("failed to copy", err);

        }
        props.showAlert("Text Copied", 'success');
    }

    const handleExtraSpaces = () => {

        let newText = text.replace(/  +/g, ' ');
        setText(newText);
        props.showAlert("Extra spaces has been handled", 'success');

    }

    const clickedOver = (event) => {
        //console.log("the button has been clicked");
        setText(event.target.value);
    }


    let countChar = 0,
        countCons = 0;

    // Function to count Vowels:

    const handleVowelCount = () => {
        for (count = 0; count <= text.length; count++) {
            if (text.charAt(count).match(/[aeiouAEIOU]/)) {
                countChar++;
                setCount(countChar);
            }
        }
        alert(` You have entered ${countChar} number of Vowels`);
        // console.log("No. of Vowels are: " + countChar);
    };

    // Function to count Consonants:
    const handleConsonantsCount = () => {
        for (count1 = 0; count1 <= text.length; count1++) {
            if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
                countCons++;
                setCount1(countCons);
            }
        }

        alert(`You have entered ${countCons} number of Consonants`)

    }

    //Reverse text Button
    const reverseText = () => {
        let splitWord = text.split("");

        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords

        setText(newText);
        props.showAlert("Text has been reversed", 'success');
    };


    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }} > <br />
                <h3> {props.heading}</h3>
                <div className="container">
                    <textarea className="form-control my-16" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'dark' ? 'white' : 'black', height: 300 }} value={text} onChange={clickedOver} id="floatingTextarea"></textarea>
                </div><br />

                <div className="myBtn">

                    <button type="button" className="btn btn-primary mx-2" onClick={handleclickedup}>ConvertToUppercase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleclicked}>ConvertToLowercase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={cleartext}>ClearText</button>
                    <button type="button" onClick={speak} className="btn btn-primary  mx-2 ">Speak</button>
                    <button type="button" onClick={copy} className="btn btn-primary  mx-2 ">Copy Text</button>
                    <button type="button" onClick={handleExtraSpaces} className="btn btn-primary  mx-2 ">Handle Extra Spaces </button>
                    <button type="button" onClick={handleVowelCount} className="btn btn-primary  mx-2 ">Count Vowels</button>
                    <button type="button" onClick={handleConsonantsCount} className="btn btn-primary  mx-2 ">Count Consonants</button>

                    <button type="button" onClick={reverseText} className="btn btn-primary  mx-2 my-2">Reverse Text</button>
                </div>
            </div>
            <div className="container mb-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3> Your Text Summary Here</h3>
                <p> {text.trim() === '' ? 0 : text.match(/\S+/g).length}
                    words and {text.length} characters</p>
                <p> Average Time To Read {0.008 * text.split(" ").length}</p>
                {/* <p> <strong>{count} Number of Vowels </strong> </p>
                <p><strong> {count1} Number of Consonants</strong></p> */}

            </div>
        </>
    )
}









