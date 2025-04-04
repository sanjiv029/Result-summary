import data from "../data.json";

function Result() {
    const average = Math.round(data.reduce((sum , item)=> sum + item.score, 0)/data.length);
  return (
    <>
    <div className='result'>
        <h1>Your Result</h1>
        <div className="circle">
            <h2 className="average">{average}</h2>
            <p className="of-100">of 100</p>
        </div>
        <div className="footer">
            <h3>Great</h3>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    </div>
    </>
  )
}

export default Result