import React, { useState, useEffect, useRef } from "react";
import Question from './questionLabel';
import Footer from './footer';
//import Select from 'react-select';
import Select from './select';
import "bootstrap/dist/css/bootstrap.min.css";
import { quizData } from '../Assets/places';

const Quiz = () => {
  //const quizData = QuizData;
  const [quizQuestion, setQuizQuestion] = useState({
    //for the game being currently played
    Hint: "",
    A: "",
  });

  const [selectValue, setSelectValue] = useState();
  const [answerRight, setAnswerRight] = useState();
  const [answerWrong, setAnswerWrong] = useState();
  const [questionLabel, setQuestionLabel] = useState();

  const handleGameStart = () => {
    LoadSelectListData();
    let randomNum = Math.floor(Math.random() * (quizData.length - 0 + 1)) + 0;
    setQuizQuestion({ Hint: quizData[randomNum].Hint, A: quizData[randomNum].Meaning });
    setQuestionLabel(quizData[randomNum].Place_name);
  }
  const handleSelectValueChange = (event) => {
    console.log('select value changed to: ', event.target.value);
    //setSelectValue(event.target.value);
  };

  const LoadSelectListData = () => {
    const selectList = quizData.map((item) => ({ value: item.Meaning, label: item.Meaning }));
    const selectListSorted = [...selectList].sort((a, b) => (a.value > b.value ? 1 : -1));
    setSelectValue(selectListSorted);

  };

  const CheckAnswer = () =>{
    
  }
  useEffect(() => {
    //GetSelectListData();
  }, []);

  return (
    <div className="container-fluid">

      <div className="row">
        <div className="col-sm-3">
          <button className="buttonSubmit btn btn-default" onClick={handleGameStart}>
            Choose a place
          </button>
        </div>
        <div className="col-sm-9 pt-2">
          <div className="col-sm-4">
            <Question props={questionLabel} />
          </div>
          <div className="col-sm-6">
            <Select placeHolder={"Please select a question"} value={selectValue} options={selectValue}
              onChange={handleSelectValueChange} />
          </div>
        </div>
      </div>
      <div className="row">

      </div>
      <Footer props={quizQuestion} />
    </div>

  );
};

export default Quiz;