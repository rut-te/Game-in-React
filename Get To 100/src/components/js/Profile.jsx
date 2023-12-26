import "../css/Profile.css"
import { useState } from "react"

const profiles = ["🤔", "🤗", "🤵", "👰", "🥰", "😇", "🤩", "😎", "🤣", "😁", "🥱", "😴", "😛", "🥸"]

export default function Profire() {
    let [currentProfile, setProfile] = useState(Math.floor(Math.random() * 14))//שומר את אינדקס הפרופיל הנבחר
    try {
        return (
            <div className="profile">
                <i onClick={() => changeProfile("▶️", currentProfile, setProfile)}>▶️</i>
                <p className="profile-pic">{profiles[currentProfile]}</p>
                <i onClick={() => changeProfile("◀️", currentProfile, setProfile)}>◀️</i>
            </div>
        )
    }
    catch (e) {
        console.log(e);
        alert(e.message);
    }
}

function changeProfile(dir, currentProfile, setProfile) {
    if (dir == "◀️") {
        if (currentProfile === profiles.length - 1) {
            setProfile(0);
        }
        else {
            setProfile(i => i + 1);
        }
    }
    else {
        if (currentProfile === 0) {
            setProfile(13);
        }
        else {
            setProfile(i => i - 1);
        }
    }
}