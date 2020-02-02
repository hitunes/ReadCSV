import { dateStringToDate } from './utils';
import { MatchResult, MatchData } from './MatchResult';

export type matchData = [Date, string, string, number, number, MatchResult, string]

export interface DataReader {
  read(): void;
  data: string[][];


}

export class MatchReader {
  matches: MatchData[] =[]
  constructor(public reader: DataReader){}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): matchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        Number(row[3]),
        Number(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    });
  }
}