import memesData from "../memesData"
import React from 'react'
import { useState } from "react";
export default function Meme() {
    
    const [meme, setMeme] = useState({
        topText: "",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    console.log(meme) //will give random current url when button is clicked
    //now setting the memeurl in above getRandomImage function 
    const [allMemeImages, setAllMemeImage] = useState(memesData)

    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
    let randomMemeUrl;
    function getRandomImage () {
         // console.log(memesData.data.memes) //array of memes
    let randomMemeNumber=Math.floor(Math.random()*allMemeImages.data.memes.length) 
    // console.log(randomMemeNumber) //1, 2, ...., 100
    // console.log(memesData.data.memes[randomMemeNumber]) //random one of the memes object
    // console.log(memesData.data.memes[randomMemeNumber].url) //random url of memes object
    let randomMemeUrl = allMemeImages.data.memes[randomMemeNumber].url
        // console.log(randomMemeUrl)
        setMeme(prevstate=>({...prevstate, randomImage:randomMemeUrl}))
    }
   /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.**/

   /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    //state foundation
    // console.log(useState()) //[undefined, f()] //will retuen an array with 1st element is any data value and 2nd one is function 
    //                           //import useState from react to use it
    // console.log(React.useState("Hey")) //["hey", f()] //to use in this way then you have to 1st import React from react
    // let stateArray = useState("Hi") //whatever we pass into useState will be 1st inital element value of array
    // console.log(stateArray) //["hi, f()"]
    // const [element, setElement] = useState("Welcome") //array destructuring // [element, setElement] = ["welcome", setElement]
    // console.log(element) //welcome
    // console.log(typeof(setElement)) //function

   


    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    return (
        <main className="=meme">
            {/* <p>{randomMemeUrl}</p> */} {/*local variable does not change ui or will not work directly in react, we have requred state to work */}
            <div className="form" action=""> {/* changing form to div because here we don't want to submit input value, since there is button inside 
                                                form it will refresh the page after clicking  */}
                {/* To make more accessible input, use label bcz screen reader does not read
                 placeholder, label tag allow to read it about input, there is two way */}
                <div>
                    {/* 1: using label as sibling element but using html-For and id */}
                    <label htmlFor="top-text">Top Text</label>
                    <input className="form-input" type="text" id="top-text" placeholder="Shut Up" />
                </div>
                <div>
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input className="form-input" type="text" id="bottom-text" placeholder="And Take My Money" />
                </div>
                {/* 2: using label as parent element of input */}
                {/* <div>
                <label >Top Text
                <input className="form-input" type="text" placeholder="Shut Up"/>
                </label>
                </div>
                <div>
                <label >Bottom Text
                <input className="form-input" type="text" placeholder="And Take My Money"/>
                </label>
                </div> */}
                <button onClick={getRandomImage} className="form-button">Get a new meme image  🖼</button>
                {/* onClick is Eventlistner in react, like we did in js .addEventListener("click", function (){}), or in html element
                onclick="functionName()" refer this link (https://react.dev/reference/react-dom/components/common#mouseevent-handler) to explore more */}
            </div>
            <img src={meme.randomImage} alt="random-meme-image" className="meme-image"/>
        </main>
    )
}