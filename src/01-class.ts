const date = new Date(2004, 10, 3);
console.log(date);

class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number){
        this.year = year,
        this.month = month,
        this.day = day
    }
}

const myDate = new MyDate(2004, 10, 3)
console.log(myDate)