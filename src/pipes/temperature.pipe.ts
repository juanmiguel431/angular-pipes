import { Pipe, PipeTransform } from '@angular/core';
import { roundTo } from '../utils';

type Format = 'C' | 'F';

@Pipe({
  name: 'temp',
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputFormat: Format = 'C',
    outputFormat: Format = 'C'
  ): string {

    if (value === null) {
      return '';
    }

    const val = typeof value === 'number' ? value : parseFloat(value);

    let outTemp: number;

    if (inputFormat === 'C' && outputFormat === 'F') {
      outTemp = val * (9 / 5) + 32; // convert to Fahrenheit
    } else if (inputFormat === 'F' && outputFormat === 'C') {
      outTemp = (val - 32) * (5/9);
    } else {
      outTemp = val;
    }

    let symbol: '°C' | '°F';

    if (outputFormat) {
      symbol = outputFormat === 'C' ? '°C' : '°F';
    } else {
      symbol = inputFormat === 'C' ? '°C' : '°F';
    }

    const rounded = roundTo(outTemp, 2);

    return `${rounded} ${symbol}`;
  }
}
