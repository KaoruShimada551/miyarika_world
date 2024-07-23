import React, { Component, useState, useEffect } from "react"
import SplashScreen from "./SplashScreen";
import {render} from "react-dom"

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="app">
           {loading ? (
               <SplashScreen />
           ) : (
                <MainContent />
           )}
       </div>
    );
};

const appDiv = document.getElementById("app");
render(<App/>, appDiv)


// スライドショー
const Slideshow = () => {
    const setImage = [
        "http://127.0.0.1:8000/frontend/static/images/baloon.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/flower.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/teatime.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/street.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/grandma.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/lantern.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/orangetable.jpeg",
        "http://127.0.0.1:8000/frontend/static/images/sunflower.jpeg"
    ];
  
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCounter(prevCounter => (prevCounter >= setImage.length - 1 ? 0 : prevCounter + 1));
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, [setImage.length]);
  
    return (
        <div
        id="slideshow"
        className="background-clip"
        style={{ backgroundImage: `url(${setImage[counter]})`,}}>
            <h1>Miyarika World!</h1>
        </div>
    );
};
export default Slideshow;
const slideDiv = document.getElementById("slideshow");
render(<Slideshow/>, slideDiv)
