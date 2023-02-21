import React, { useState, useEffect, useRef } from "react";
import QuestionLabel from './questionLabel';
import Footer from './footer';
import Results from './results';
import Select from './select';
import "bootstrap/dist/css/bootstrap.min.css";
import { quizData } from '../Assets/places';
import Swal from "sweetalert";

const Quiz = () => {
  const [quizDataSet, setQuizDataSet] = useState({
    Hint: "",
    Place_name: "",
    Meaning: ""
  });

  const [selectValue, setSelectValue] = useState();
  const [correctGuess, setCorrectGuess] = useState([]);
  const [incorrectGuess, setIncorrectGuess] = useState([]);
  const [questionLabel, setQuestionLabel] = useState();
  let UserGuess;

  const handleGameStart = () => {
    LoadSelectListData();
    let randomNum = Math.floor(Math.random() * (quizData.length - 0 + 1)) + 0;
    let randomQuizData = quizData[randomNum];
    setQuizDataSet({ Place_name: randomQuizData.Place_name, Hint: randomQuizData.Hint, Meaning: randomQuizData.Meaning });
    setQuestionLabel({ Place_name: quizData[randomNum].Place_name, Hint: quizData[randomNum].Hint });
  }
  const handleSelectValueChange = (event) => {
    console.log('select value changed to: ', event.target.value);
    UserGuess = event.target.value;

    let result = IsUserGuessCorrect({ guess: event.target.value, data: quizDataSet.Meaning });
    //console.log('User guess is ', result);
    if(result)
    { 
      QuizAlert({text: "Right Answer!", icon: "success", btnText: "Play again!"});
      setCorrectGuess((correctGuess) => [
        ...correctGuess,
        '"' + quizDataSet.Place_name + '" means "' + event.target.value + '"'
      ]);
    }
    else{
      QuizAlert({text: "Wrong Answer. Try again!", icon: "error", btnText:"Try again!"});
      setIncorrectGuess((incorrectGuess) => [
        ...incorrectGuess,
        '"' + quizDataSet.Place_name + '" does not mean "' + event.target.value + '"'
      ]);
    }
  };

  const LoadSelectListData = () => {
    const selectList = quizData.map((item) => ({ value: item.Meaning, label: item.Meaning }));
    const selectListSorted = [...selectList].sort((a, b) => (a.value > b.value ? 1 : -1));
    setSelectValue(selectListSorted);

  };

  const IsUserGuessCorrect = ({ guess, data }) => {
    console.log('Correct Answer: ', data);
    if (guess != null && guess === data) { return true; }
    else { return false; }
  };

  const QuizAlert = ({text, icon, btnText}) => {
     Swal({
      title: "Quiz Result",
      text: text,
      icon: icon,
      button: btnText,
    });
  }

  useEffect(() => {
    //GetSelectListData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-sm-6"></div>
        <div className="col-sm-6"> <QuestionLabel props={questionLabel} /></div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <button className="btn btn-default btnSubmit" onClick={handleGameStart}>
            Click here to choose a random place
          </button>
        </div>
        <div className="col-sm-6 pt-5">
          <Select placeHolder={"No Options"} value={selectValue} options={selectValue}
            onChange={handleSelectValueChange} />
        </div>
      </div>
      <Results correctGuess={correctGuess} incorrectGuess={incorrectGuess}/>
      <Footer props={quizDataSet} />
    </div>

  );
};

export default Quiz;