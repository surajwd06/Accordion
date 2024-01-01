
const MyAccordion = ({ id, question, answer, isOpen, onClicks }) => {
    return (
      <>
      <div className="main-heading">
          <span  className='span' onClick={onClicks}>{isOpen ? "➖": "➕"}</span>
          <h3>{question}</h3>
          </div>
        
        {isOpen && <p className='answers'>{answer}</p>}
        
      </>
    );
  };
  
  export default MyAccordion;