import React from "react";

const Question = ({props}) => {
    return (
    <div className='container-fluid  justify-content-md-center '>
      <h1 className='title' align='center'>
        { props ? "What is the meaning of " + props + '?' : ''}
      </h1>
    </div>
  );
}

export default Question;