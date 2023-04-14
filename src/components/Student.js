import Score from "./Score"
function Student(props){
    const { student } = props;
    return(
        <div className="student-container">
            <div className="student-info">
                <h2 className="s-name">{student.name}</h2>
                <p>{student.bio}</p>
            </div>
        
            <aside className="score-display">
            {student.scores.map((score, i) => <Score score={score} key={i} />)}
            </aside>
        </div>
      
    )
}
export default Student;