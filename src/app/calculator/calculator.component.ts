import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  flames = 0;
  underControl = false;
  chemicalDrums = 0;
  manikinRescued = false;
  manikinTimeBonus = 90;
  total = 0;

  constructor() {
  }

  ngOnInit() {
  }

  recalculateTotal() {
    this.total = 0;

    this.total += this.flames * 5;
    if (this.flames === 30) {
      this.underControl = true;
      this.total += 30;
    } else {
      this.underControl = false;
    }

    this.total += this.chemicalDrums * 40;

    if (this.manikinRescued) {
      this.total += 120 + this.manikinTimeBonus;
    }
  }
}
