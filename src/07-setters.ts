enum Mes {
    Enero = 1,
    Febrero,
    Marzo,
    Abril,
    Mayo,
    Junio,
    Julio,
    Agosto,
    Septiembre,
    Octubre,
    Noviembre,
    Diciembre,
}

class MyDate {

    constructor(
        private _year: number,
        private _month: number,
        private _day: number
    ) { }

    printFormat(): string {
        const dayStr = this.addPadding(this._day);
        const month = this.validateMonth();
        return `${dayStr}-${month}-${this._year}`;
    }

    private addPadding(value: number): string {
        return value < 10 ? `0${value}` : value.toString();
    }

    private validateMonth(): string {
        return Mes[this._month] || this._month.toString();
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this._day += amount;

            while (true) {
                const daysInMonth = new Date(this._year, this._month, 0).getDate();
                if (this._day > daysInMonth) {
                    this._day -= daysInMonth;
                    this._month += 1;

                    if (this._month > 12) {
                        this._month = 1;
                        this._year += 1;
                    }
                } else {
                    break;
                }
            }
        }
        if (type === 'months') {
            this._month += amount;
            while (this._month > 12) {
                this._month -= 12;
                this._year += 1;
            }
        }
        if (type === 'years') {
            this._year += amount;
        }
    }

    get day(): number {
        return this._day;
    }

    get month(): number {
        return this._month;
    }

    get year(): number {
        return this._year;
    }

    get isLeapYear(): boolean {
        return this._year % 4 === 0
    }

    set day(value: number) {
        const daysInMonth = new Date(this._year, this._month, 0).getDate();
        if (value > daysInMonth || value < 1) {
            const mesName = this.validateMonth();
            throw new Error(`En el mes de ${mesName} con el año ${this._year} no existe el dia ${value}, solo puedes asignar desde el dia 1 hasta el dia ${daysInMonth}.`);
        }
        this._day = value;
    }

    set month(value: number) {
        if (value > 12 || value < 1) {
            throw new Error("Invalid month");
        }
        this._month = value
    }

    set year(value: number) {
        this._year = value
    }
}

const myDate = new MyDate(2024, 2, 2);
console.log('Fecha inicial:', myDate.printFormat());
