import '../css/LoginAndSignUp.css'
import { useState } from 'react';
import StartOrAdd from './StartOrAdd';

function Login({ setPage, setUsers }) {
    const [showQuestion, setShow] = useState(false);//האם להציג חלונית של הוספת שחקן/התחלת משחק
    try {
        return (
            <>
                <h1>היי, איזה כיף שחזרת</h1>
                <form dir="rtl" onSubmit={(e) => { e.preventDefault(); toLogin(setUsers, e, setShow); return false; }}>
                    <input type="email" name="loginUserEmail" id="loginUserEmail" placeholder="אימייל" required></input>
                    <input type="password" name="loginUserPassword" id="loginUserPassword" placeholder="סיסמא" required></input>
                    <a onClick={() => setPage("signUp")}>אני רוצה ליצור חשבון</a>
                    <button id="startMyPlaying" type="submit">התחל לשחק</button>
                </form>
                {showQuestion && <StartOrAdd setShow={setShow} setPage={setPage} />}
            </>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}

function toLogin(setUsers, e, setShow) {
    let userEmail = document.querySelector("#loginUserEmail").value;
    let myUserPassword = document.querySelector("#loginUserPassword").value;
    if (localStorage.getItem(userEmail) !== null) {
        let thisUser = JSON.parse(localStorage.getItem(userEmail));
        if (thisUser.password !== myUserPassword) {
            alert("הסיסמא שגויה");
            return;
        }
        setUsers(users => {
            users.push({ ...thisUser });
            return [...users]
        });
        e.target.reset();
        setShow(true);
    }
    else {
        alert("כתובת המייל אינה קיימת במערכת");
        return;
    }
}

export default Login;