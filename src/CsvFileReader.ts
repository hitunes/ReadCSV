import fs from 'fs';

export class CsvFileReader {

  data: string[][]  = [];
  constructor(public filename: string){}

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

  }

}
