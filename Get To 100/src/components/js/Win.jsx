import '../css/Win.css'
import game from '../../data/game'

//חלונית במקרה של ניצחון
export default function Win({ setUsers, userEmail, setGame, setCurrentPlayer }) {
    try {
        return (
            <div className='win'>
                <p>🤗!ניצחת</p>
                <button onClick={() => {
                    setGame(new game());
                    setCurrentPlayer(player => { return { ...player, index: (player.index + 1) % player.len } });
                }}>משחק חדש</button>
                <button onClick={() => {
                    setCurrentPlayer(player => { return { index: (player.index) % ((player.len) - 1), len: player.len - 1 } });
                    setUsers(last => {
                        let users = last.filter(user => user.email != userEmail);
                        return [...users];
                    });
                }}>יציאה</button>
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}