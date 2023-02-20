const footer = ({props}) =>{
   return ( <div className='fixed-bottom border bg-light border-success'>
      <div className='row'>
        <div className='col-sm'>
          <div className='appheadercitytext'>
            <b> Hint: {props.Hint ? props.Hint : ""}</b>
          </div>
        </div>
        <div className='col-sm '>
          <div className='appheadercitytext'>
            <a
              href={
                "https://www.google.com/search?q=" +
                props.A
              }
              target='_blank' rel="noreferrer"
            >
              Google -  {props.A ? props.A : "No place"}{" "}
            </a>
          </div>
        </div>
        <div className='col-sm'>
          <a
            className='appheadercitytext'
            href='https://nzhistory.govt.nz/culture/maori-language-week/1000-maori-place-names'
          >
            1000 Maori Place Names
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;