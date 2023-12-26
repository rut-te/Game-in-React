import '../css/LoginAndSignUp.css'
import Profile from './Profile';
import user from '../../data/user';
import { useState } from 'react';
import StartOrAdd from "../js/StartOrAdd"

function SignUp({ setPage, setUsers }) {
    const [showQuestion, setShow] = useState(false);//הצגת חלונית של התחלת משחק/הוספת שחקן
    try {
        return (
            <>
                <h1>הרשמה</h1>
                <form dir="rtl" onSubmit={(e) => { e.preventDefault(); toSignUp(setUsers, e, setShow); return false; }}>
                    <Profile />
                    <input type="text" name="name" id="name" placeholder="שם" required></input>
                    <input type="email" name="userEmail" id="userEmail" placeholder="אימייל" required></input>
                    <input type="password" name="userPassword" id="userPassword" placeholder="סיסמא" required></input>
                    <input type="password" name="userPasswordCheck" id="userPasswordCheck" placeholder="בדיקת סיסמא" required></input>
                    <a onClick={() => setPage("login")}>יש לי כבר חשבון</a>
                    <button id="startPlaying" type="submit">התחל לשחק</button>
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

function toSignUp(setUsers, e, setShow) {
    let userEmail = document.querySelector("#userEmail").value;
    if (localStorage.getItem(userEmail) === null) {
        let currentUser = new user(
            document.getElementById("name").value,
            document.getElementById("userEmail").value,
            document.getElementById("userPassword").value,
            document.querySelector(".profile-pic").innerText
        );
        if (currentUser.password !== document.getElementById("userPasswordCheck").value) {
            alert("הסיסמאות אינם שוים");
            return;
        }
        localStorage.setItem(userEmail, JSON.stringify(currentUser));
        setUsers(users => {
            users.push({ ...currentUser });
            return [...users]
        });
        e.target.reset(); 
        setShow(true);
    }
    else {
        alert("יש בעיה בכתובת האימייל");
        return;
    }
}

export default SignUp;