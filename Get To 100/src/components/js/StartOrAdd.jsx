import "../css/StartOrAdd.css"

//חלונית להצגת אפשרות התחלת משחק/הוספת שחקן
export default function StartOrAdd({ setShow, setPage }) {
    try {
        return (
            <div className="startOrAdd">
                <h3>נוספת בהצלחה למשחק🤪</h3>
                <button onClick={() => { setShow(false); setPage("game") }}>התחל משחק</button>
                <button onClick={() => { setShow(false); setPage("login") }}>הוסף שחקן</button>
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}