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
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const month = this.validateMonth();
    return `${this.day}-${month}-${this.year}`;
  }

  validateMonth(): string {
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
      // Mientras los meses superen los 12 del año
      while (this.month > 12) {
        this.month -= 12;
        this.year += 1;
      }
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2024, 2, 24);
console.log('Inicio:', myDate.printFormat());
myDate.add(7, 'days');
console.log('Después de 7 días (Feb -> Mar):', myDate.printFormat());

const myDate2 = new MyDate(2024, 12, 10);
console.log('Inicio:', myDate2.printFormat());
myDate2.add(2, 'months');
console.log('Después de 2 meses (Dic -> Feb):', myDate2.printFormat());

