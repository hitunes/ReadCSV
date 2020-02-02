import { dateStringToDate } from './utils';
import { CsvFileReader } from './CsvFileReader';
import { MatchData, MatchResult } from './MatchResult';

export class MatchReader extends CsvFileReader<MatchData>{
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number(row[3]),
      Number(row[4]),
      row[5] as MatchResult,
      row[6],
    ]
  }
}