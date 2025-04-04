import data from "../data.json";

function Summary() {
  return (
    <>
    <div className="summary">
      <h1>Summary</h1>
      <ul className="item-list">
        {data.map((item) => (
          <ol className="item" key={item.category} style={{backgroundColor: item.color}}>
            <div className="name" style={{color:item.text}}>
            <img
              src={item.icon}
              alt={item.category}
              width="20"
              height="20"
              />
            {item.category} 
            </div>
            <div className="score"><strong>{item.score}</strong>/ 100</div>
          </ol>
        ))}
      </ul>
        <button>Continue</button>
    </div>
    </>
  );
}

export default Summary;
