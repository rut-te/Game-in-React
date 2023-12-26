//שומר נתונים עבור משחק נוכחי של משתמש מסוים
export default class game{
    constructor(act = 0, num = Math.floor(Math.random()*99), win = false){
        this.actions = act;//מספר הפעולות
        this.number = num;//המספר שכרגע יש לו
        this.win = win;//האם להציג את הקומפוננטה של ניצחון
    }
}