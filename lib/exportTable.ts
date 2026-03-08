import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

/**
 * استخدمنا T هنا كـ Generic عشان الدالة تقبل أي شكل Object 
 * بدل ما نحدد Record<string, any>
 */

export function exportToExcel<T extends object>(data: T[], fileName: string): void {
  // تحويل البيانات لشيت
  const worksheet = XLSX.utils.json_to_sheet(data);
  // إنشاء كتاب عمل جديد
  const workbook = XLSX.utils.book_new();
  
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
}

export function exportToPDF<T extends object>(data: T[], fileName: string): void {
  const doc = new jsPDF();

  if (data.length === 0) return;

  // استخراج العناوين من أول Object في المصفوفة
  const headers = Object.keys(data[0]) as (keyof T)[];

  // تحويل المصفوفة لشكل Rows متوافق مع jspdf-autotable
  const rows = data.map((row) => 
    headers.map((h) => String(row[h] ?? ""))
  );

  autoTable(doc, {
    head: [headers.map(String)], // تحويل العناوين لنصوص
    body: rows,
  });

  doc.save(`${fileName}.pdf`);
}