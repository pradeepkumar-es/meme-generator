// import memesData from "../memesData"
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
    let randomMemeNumber=Math.floor(Math.random()*allMemes.length) 
    // console.log(randomMemeNumber) //1, 2, ...., 100
    // console.log(memesData.data.memes[randomMemeNumber]) //random one of the memes object
    // console.log(memesData.data.memes[randomMemeNumber].url) //random url of memes object
    let randomMemeUrl = allMemes[randomMemeNumber].url
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

    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */
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


    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
    //useEffect //a hook i used to running side Effect like api, local storage, web sockets, syncing two states in react 
    /*useEffect function take two parameter 1st one is callback function or arrow function to run side Effects thing 
    2nd one is dependencies array which help if any change in the value of the array then it reruns the effect function
    otherwise effect function run only 1st time when component is rendered
    dependencies array is something that decide whether effect function should run or not*/
    //** useEffect runs run after jsx element get displayed//i.e. everything before return of component, run then it skip useEffect then it display jsx on the browser then useEffect run
    /*sideEffect happen if we don't use useEffect or we use dependecies that change on every render bcz when component render it run the side Effect and when side effect things happen 
    and we update state, and we know that if any change happen in state, it will re-render the component to update ui of website
    and in this way side eFfect things run again and change state which cause to re-render the component, and 
    this thing happen repeatedly*/


    React.useEffect (()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))
    }, []
    )


   /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */


   //using async function

//    React.useEffect(()=>{
//     async function getMemes () {
//        const res= await fetch("https://api.imgflip.com/get_memes")
//        const data = res.json()
//        setAllMemes(data.data.memes)
//     }
//     getMemes()  //calling so that it is accessible to our callback useEffect funtion 
// },[])



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
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" alt="random-meme-image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}