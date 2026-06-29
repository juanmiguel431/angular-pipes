import { Component, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { SortPipe } from '../pipes/sort.pipe';

// https://angular.dev/guide/templates/pipes#using-pipes
@Component({
  selector: 'app-root',
  imports: [DatePipe, TemperaturePipe, SortPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentDate = new Date();
  currentTemperatures = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5];

  onReset(index: number) {
    // TODO this is not going to work because we are using the sort pipe
    console.log(index);
    // this.historicTemperatures[index] = 18;
  }
}
