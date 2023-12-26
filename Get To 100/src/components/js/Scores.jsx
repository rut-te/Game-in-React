import '../css/Scores.css'

//הצגת הניצחונות של כל שחקן
export default function Scores({ scores }) {
    let config = 0;
    try {
        return (
            <div className='scores'>
                {scores.length != 0 ? (<p>:תוצאות</p>) : (<p>לא ניצחת עדין <br />😶</p>)}
                {scores.map(score => {
                    return (<p key={config++}>{score}</p>)
                })}
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}