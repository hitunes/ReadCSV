import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
let manUtdWins = 0;

for (let match of matchReader.matches) {
  if(match[1] ==='Man United' && match[5] === MatchResult.homeWin ||
    match[2] ==='Man United' && match[5] === MatchResult.awayWin) {
    manUtdWins ++
  }
}
console.log(manUtdWins)