import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";



export function exportToExcel<T extends object>(data: T[], fileName: string): void {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}


// pdfffffffffffff
type Product = {
  title: string;
  price: number;
  category: string | { name: string };
};
export function exportToPDF(data: Product[], fileName: string): void {
  if (data.length === 0) return;

  const doc = new jsPDF();

  const headers = ["Title", "Price", "Category"];

  const rows = data.map((item) => [
    item.title,
    item.price,
    typeof item.category === "string"
      ? item.category
      : item.category?.name
  ]);

  autoTable(doc, {
    head: [headers],
    body: rows,
  });

  doc.save(`${fileName}.pdf`);
}
