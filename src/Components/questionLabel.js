import React from "react";

const QuestionLabel = ({ props }) => {
  return (
    <div className='justify-content-md-center' style={{ height: '50px' }}>
      <h3 className={props ? "d-block pt-20" : "d-none"}>
        What is the meaning of <span className="mark">
          {props ? props.Place_name + '?' : ''}</span>
      </h3>
      <blockquote className={props ? "d-block text-muted p-0" : "d-none text-muted p-0"}>
        {props ? 'Hint: ' + props.Hint + '?' : ''}

        {/* <a className={props ? "d-block p-0" : "d-none"}
          href={props ?
            "https://www.google.com/search?q=meaning: " + props.Place_name : "No place"
          }
          title={props ? "Search google for " + props.Place_name + '"' : ""}
          target='_blank' rel="noreferrer"
        >
          Google -  {props ? props.Place_name : "No place"}{" "}
        </a> */}
      </blockquote>
    </div>
  );
}

export default QuestionLabel;