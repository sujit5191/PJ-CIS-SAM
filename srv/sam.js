module.exports = cds.service.impl(async function () {
    const XLSX = require('xlsx');

    // Specify the path to the Excel file on the shared drive
    const filePath = '/path/to/shared/drive/file.xlsx';

    // Load the workbook
    const workbook = XLSX.readFile(filePath);

    // Get the first sheet name
    const sheetName = workbook.SheetNames[0];

    // Get the worksheet
    const worksheet = workbook.Sheets[sheetName];

    // Convert the worksheet to JSON format
    const jsonData = XLSX.utils.sheet_to_json(worksheet);

    // Output the JSON data
    console.log(jsonData);
});