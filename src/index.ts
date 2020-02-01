import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
// enum
enum MatchResult {
  homeWin ='H',
  awayWin ='A',
  draw ='D',
}



let manUtdWins = 0;

for (let match of reader.data) {
  if(match[1] ==='Man United' && match[5] === MatchResult.homeWin ||
    match[2] ==='Man United' && match[5] === MatchResult.awayWin) {
    manUtdWins ++
  }
}
console.log(manUtdWins)