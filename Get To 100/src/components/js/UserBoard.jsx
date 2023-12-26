import { useState } from 'react';
import '../css/UserBoard.css';
import game from '../../data/game';
import Win from './Win';
import Scores from './Scores';

export default function UserBoard({ user, setCurrentPlayer, myTurn, setUsers }) {
    const [thisGame, setThisGame] = useState(new game());
    const [showScores, setShowScores] = useState(false);
    try {
        return (
            <div className={`userBoard ${myTurn && "isTurn"}`} >
                <nav>
                    <p>{`פעולות:${thisGame.actions}`}</p>
                    <p onClick={() => setShowScores(last => !last)}>{`${user.name} ${user.profile}`}</p>
                    {showScores && <Scores scores={user.scores} />}
                </nav>
                <main>
                    <h1>{thisGame.number}</h1>
                    <button onClick={() => changeNumber("*2", setThisGame, setCurrentPlayer, myTurn, user, setUsers, thisGame)}>*2</button>
                    <button onClick={() => changeNumber("/2", setThisGame, setCurrentPlayer, myTurn, user, setUsers, thisGame)}>/2</button>
                    <button onClick={() => changeNumber("+1", setThisGame, setCurrentPlayer, myTurn, user, setUsers, thisGame)}>+1</button>
                    <button onClick={() => changeNumber("-1", setThisGame, setCurrentPlayer, myTurn, user, setUsers, thisGame)}>-1</button>
                </main>
                {thisGame.win && <Win setUsers={setUsers} userEmail={user.email}
                    setGame={setThisGame} setCurrentPlayer={setCurrentPlayer} />}
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}

function changeNumber(action, setThisGame, setCurrentPlayer, myTurn, user, setUsers, thisGame) {
    if (!myTurn)
        return;
    let numberAfterAction = thisGame.number;
    switch (action) {
        case "*2":
            numberAfterAction *= 2;
            setThisGame(thisGame => new game(thisGame.actions + 1, thisGame.number * 2, numberAfterAction == 100));
            break;
        case "/2":
            numberAfterAction = Math.floor(numberAfterAction / 2);
            setThisGame(thisGame => new game(thisGame.actions + 1, Math.floor(thisGame.number / 2), numberAfterAction == 100))
            break;
        case "+1":
            numberAfterAction += 1;
            setThisGame(thisGame => new game(thisGame.actions + 1, thisGame.number + 1, numberAfterAction == 100))
            break;
        case "-1":
            numberAfterAction -= 1;
            setThisGame(thisGame => new game(thisGame.actions + 1, thisGame.number - 1, numberAfterAction == 100))
            break;
    }
    if (numberAfterAction == 100) {
        user.scores.push(thisGame.actions);
        localStorage.setItem(user.email, JSON.stringify(user));
        setUsers(last => {
            let users = last.map(u => (u.email == user.email) ? { ...user } : { ...u });
            return [...users];
        });
    }
    else {
        setCurrentPlayer(player => { return { ...player, index: (player.index + 1) % player.len } });
    }
}