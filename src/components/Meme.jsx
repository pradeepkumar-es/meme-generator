import download from 'downloadjs';
import { toPng } from 'html-to-image';
import React from 'react'
import { useState } from "react";
export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    // console.log(meme) //will give random current url when button is clicked
    //now setting the memeurl in above getRandomImage function 
    const [allMemes, setAllMemes] = useState([])

    function getRandomImage () {
         // console.log(memesData.data.memes) //array of memes
    let randomMemeNumber=Math.floor(Math.random()*allMemes.length) 
    // console.log(randomMemeNumber) //1, 2, ...., 100
    // console.log(memesData.data.memes[randomMemeNumber]) //random one of the memes object
    // console.log(memesData.data.memes[randomMemeNumber].url) //random url of memes object
    let randomMemeUrl = allMemes[randomMemeNumber].url
        // console.log(randomMemeUrl)
        setMeme(prevstate=>({...prevstate, randomImage:randomMemeUrl}))
    }

    function handleChange (event) {
        const {name, value} = event.target
        setMeme(prevMeme=>(
            {...prevMeme,
                [name]:value
            }
        ))
    }
    
    const id= React.useId  //creating unique id for label and input to avoid any input fields's id matches with element's id
    //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    console.log(typeof(id)) //function to give unique id

    React.useEffect (()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    }, []
    )
    const memeEl = document.getElementById("meme");
    function downloadMeme () {
        toPng(memeEl)
        .then(dataUrl=>{
            download(dataUrl, `${meme.topText}-custom-meme.png`)
        })
        .catch((error)=>{
            alert(error);
        })
    }
    return (
        <main className="=meme">
            {/* <p>{randomMemeUrl}</p> */} {/*local variable does not change ui or will not work directly in react, we have requred state to work */}
            <div className="form" action=""> {/* changing form to div because here we don't want to submit input value, since there is button inside 
                                                form it will refresh the page after clicking  */}
                {/* To make more accessible input, use label bcz screen reader does not read
                 placeholder, label tag allow to read it about input, there is two way */}
                <div>
                    {/* 1: using label as sibling element but using html-For and id */}
                    <label htmlFor={id+"top-text"}>Top Text</label>
                    <input 
                    className="form-input"
                     type="text"
                     id={id+"top-text"} //to connect label with input //making accesible for screen reader whic does not read placeholder
                    placeholder="Shut Up"
                    onChange={handleChange} //listening eventlistener to run function
                    name="topText"  //to help handelchange function to distinguish on which input field we are working //name should be same as defined as kay in state object 
                    value={meme.topText} //making controlled input by react not by input
                    />
                </div>
                <div>
                    <label htmlFor={id+"bottom-text"}>Bottom Text</label>
                    <input 
                    className="form-input" 
                    type="text" 
                    id={"bottom-text"} 
                    placeholder="And Take My Money"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                    />
                </div>
                <button onClick={getRandomImage} className="form-button">Get a new meme image  🖼</button>
            </div>
            <div className="meme" id='meme'>
                <img src={meme.randomImage} className="meme-image" alt="random-meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="download-meme">
                <button className='download-btn' onClick={downloadMeme}>Download Your Meme Image</button>
            </div>
        </main>
    )
}