import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgeCalculator';
  years: any = '--'
  months: any = '--'
  days: any = '--'

  calculateAge(myForm: NgForm) {
    const { date, month, year } = myForm.value
    const dob = new Date(year, month - 1, date)

    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust months and years if the current month and day are before the birth month and day
    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    // Adjust days if the current day is before the birth day
    if (days < 0) {
      const pMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += pMonth.getDate();
      months--;
    }

    this.showNow(years, months, days)

  }


  showNow(years: Number, months: number, days: number) {
    this.years = years
    this.months = months
    this.days = days
    // return message
  }
}
