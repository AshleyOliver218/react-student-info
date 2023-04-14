function Score(props){
    let {score} = props;
    return(
        <div className="score-box">
            <h4>Score:</h4>
            <p className="s-score">{score.score}</p>
            <h4>Date:</h4>
            <p className="s-date">{score.date}</p>
        </div>
    )
}
export default Score