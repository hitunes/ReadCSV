import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[]  = [];
  constructor(public filename: string){}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
    .split('\n')
    // map out the array
    .map((row: string): string[] => {
      return row.split(',')
    })
    // converts the value types in the array
    .map(this.mapRow)
  }

}