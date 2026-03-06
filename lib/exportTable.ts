import * as XLSX from "xlsx";

type ExcelRow = Record<string, string | number>;

export function exportToExcel(
  data: ExcelRow[],
  fileName: string
): void {

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}



///////// export pdf ////////////////

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

type PDFRow = Record<string, string | number>;

export function exportToPDF(
  data: PDFRow[],
  fileName: string
): void {

  const doc = new jsPDF();

  const headers = Object.keys(data[0]);

  const rows = data.map((row) => Object.values(row));

  autoTable(doc, {
    head: [headers],
    body: rows,
  });

  doc.save(`${fileName}.pdf`);
}