import '../css/HomePage.css';

//דף פתיחה ראשי
export default function HomePage({ set }) {
    try {
        return (
            <>
                <h2>Get To 100</h2>
                <h1>שמחים לשחק איתך😊</h1>
                <button onClick={() => set("login")}>התחל לשחק</button>
            </>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}