function checkLogin(username, password) {
  const sheetId = '1aBcDeFgHiJkLmNoPqRsTuVwXyZ123456789'; // Replace with your Sheet ID
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName('Sheet1'); // Replace 'Sheet1' with the name of the sheet containing data
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === username && data[i][1] === password) {
      return true; // Login successful
    }
  }
  return false; // Login failed
}
