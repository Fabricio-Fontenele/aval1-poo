
export function alignText(data: string, colFormat: string[]): string {
    const columns = data.split("|")
    let formattedText = "";
  
    for (let index in columns) {
      const format = colFormat[index];
      let value = columns[index]
      let width: number;
  
      switch (format[0]) {
        case ">":
          width = parseInt(format.substring(1));
          formattedText += value.padStart(width);
          break;
        case "<":
          width = parseInt(format.substring(1));
          formattedText += value.padEnd(width);
          break;
        default:
          width = parseInt(format);
          const leftWidth = Math.floor((width - value.length) / 2);
          value = value.padStart(value.length + leftWidth);
          formattedText += value.padEnd(width);
      }
  
      if (parseInt(index) < columns.length - 1) {
        formattedText += " | ";
      }
    }
  
    return formattedText;
  }
  

  export function alignLine(line: string, colWidths: number[]) {
  
    for (const index in colWidths) {
      line += line.repeat(colWidths[index])
  
      if (parseInt(index) < colWidths.length - 1) {
        line += line
      }
    }
  
    return line
  }
  