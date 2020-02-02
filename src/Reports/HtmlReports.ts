import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>Reports</div>
      <div>${report}</div>
    `;
    fs.writeFileSync('report.html', html)
  }
}