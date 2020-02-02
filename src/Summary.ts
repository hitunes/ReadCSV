import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzers/WinAnalysis';
import { HtmlReport } from './Reports/HtmlReports';


export interface Analyzer {
  run(matches: MatchData[]):string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAndReports(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport())
  }
  constructor(
      public analyzer: Analyzer,
      public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]) {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }
}