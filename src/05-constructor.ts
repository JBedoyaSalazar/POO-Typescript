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
    private year: number, 
    private month: number,
    private day: number
    ) {}

  printFormat(): string {
    const dayStr = this.addPadding(this.day);
    const month = this.validateMonth();
    return `${dayStr}-${month}-${this.year}`;
  } 

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  private validateMonth(): string {
    return Mes[this.month] || this.month.toString();
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;

      while (true) {
        const daysInMonth = new Date(this.year, this.month, 0).getDate();
        if (this.day > daysInMonth) {
          this.day -= daysInMonth;
          this.month += 1;

          if (this.month > 12) {
            this.month = 1;
            this.year += 1;
          }
        } else {
          break;
        }
      }
    }
    if (type === 'months') {
      this.month += amount;
      while (this.month > 12) {
        this.month -= 12;
        this.year += 1;
      }
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay(): number {
    return this.day;
  }
}

const myDate = new MyDate(2024, 2, 2);
console.log(myDate.printFormat());