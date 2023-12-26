import { useState } from "react";
import "../css/GamePage.css";
import UserBoard from "./UserBoard";
import NoPlayers from "./NoPlayers";
import { scoreAverage } from "../../data/user";

export default function GamePage({ set, users, setUsers }) {
    const [currentPlayer, setCurrentPlayer] = useState({
        index: 0,
        len: users.length
    });//מנהל את התור
    try {
        return (
            <>
                {(users.length == 0) && <NoPlayers set={set} /> /*אם אין משתתפים במשחק */}
                {
                    (users.length != 0) && (
                        <div className="gamePage">
                            <nav>
                                <p className="gameTitle">Get To 100</p>
                                {users.some(u => u.scores.length) && (
                                    <>
                                        <p>:שחקנים מובילים</p>
                                        {users.filter(u => u.scores.length > 0)
                                            .sort((u1, u2) => scoreAverage(u1.scores) - scoreAverage(u2.scores))
                                            .slice(0, 3).map((user, i) => (
                                                user.scores.length !== 0 && (
                                                    <p key={user.email}>
                                                        {`${user.profile} ${user.name} ${i == 0 ? '🥇' : i == 1 ? '🥈' : '🥉'}`}
                                                    </p>
                                                )
                                            ))}
                                    </>
                                )}
                                <button className="exitGame" onClick={() => {
                                    setUsers([]);
                                    set("homePage");
                                }}>יציאה</button>
                            </nav>
                            <main>
                                {users.map((user, i) => {//תצוגת לוחות עבור כל שחקן
                                    return <UserBoard setCurrentPlayer={setCurrentPlayer}
                                        myTurn={currentPlayer.index == i} user={user} key={user.email} setUsers={setUsers} />
                                }
                                )}
                            </main>
                        </div>)
                }

            </>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}
