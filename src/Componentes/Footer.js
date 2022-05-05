import React from "react";

function slider(anything){
    document.querySelector('.extrasimg').src = anything
}

export default function Footer(){
    return(
        <footer>
            <img className="img1" src="img/thumb1.png" onClick={"slider('img/img1.png')"} ></img>
            <img className="img2" src="img/thumb2.png" onClick={"slider('img/img2.png')"} ></img>
            <img className="img3" src="img/thumb3.png" onClick={"slider('img/img3.png')"} ></img>
        </footer>
    )
}