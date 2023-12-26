import { useState } from 'react'
import './App.css'
import SignUp from './components/js/SignUp';
import Login from './components/js/Login';
import GamePage from './components/js/GamePage';
import HomePage from './components/js/HomePage';

function App() {
  const [page, setPage] = useState("homePage");//איזה דף מוצג על המסך
  const [users, setUsers] = useState([]);//איזה משתמשים נמצאים במשחק, כולם וכן רק מי שכבר ניצח במשחקים קודמים
  try{
    return (
    <>
      {page == "homePage" && <HomePage set={setPage} />}
      {page == "signUp" && <SignUp setPage={setPage} users={users} setUsers={setUsers} />}
      {page == "login" && <Login setPage={setPage} users={users} setUsers={setUsers} />}
      {page == "game" && <GamePage set={setPage} users={users} setUsers={setUsers} />}
    </>
  )}
  catch(e){
    console.log(e);
    alert(e.message);
  }
}

export default App