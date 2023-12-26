//כשאין שחקנים
export default function NoPlayers({ set }) {
    try {
        return (
            <div className="noPlayers">
                <p>...😥אין מי שישחק עכשיו</p>
                <button onClick={() => set("login")}>הוסף שחקן🤩</button>
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}