//שמירת נתוני המשתמש
export default class user {
    constructor(name, email, pswd, pPic) {
        this.name = name;
        this.email = email;
        this.password = pswd;
        this.profile = pPic;
        this.scores = [];
    }
}

//פונקציה שמחשבת את הממוצע של ניצחונות המשתמש
export function scoreAverage(scores){
    let sum = 0;
    scores.forEach(score => sum += score);
    return sum / scores.length;
}
