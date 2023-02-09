import React, { useState, useEffect, useRef } from "react";
import Footer from './footer';
//import Select from 'react-select';
import Select from './select';
import "bootstrap/dist/css/bootstrap.min.css";

const Quiz = () => {

    const [gameData, setGameData] = useState({
        //for the game being currently played
        Q: "Start",
        A: "Start",
      });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                <button className="buttonSubmit btn btn-default">
                    Choose a place
                </button>
                </div>
                <div className="col-sm-6 pt-2">
                    <Select placeHolder={"Select an answer..."}/>
                </div>
            </div>
            <Footer props={gameData} />
        </div>
        
    );
};

export default Quiz;