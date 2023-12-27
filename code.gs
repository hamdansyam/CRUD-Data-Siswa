var sheetHome = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Home');
var sheetDbase = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Database');
var nameHome = sheetHome.getRange('a2').getValue();
var nameIdx = sheetDbase.getRange('a2:a').getValues().join().split(',').indexOf(nameHome)+1;
var lastRow = sheetDbase.getLastRow()+1;

function create() {
  for (i=1; i<=sheetHome.getLastColumn(); i++) {
var homeRange = sheetHome.getRange(2,i).getValue();
var dbaseRange = sheetDbase.getRange(lastRow, i).setValue(homeRange);
}
}
function read() {
for (i=2; i< sheetHome.getLastColumn()+1; i++) {
var dbaseRange = sheetDbase.getRange((nameIdx + 1),i).getValue();
var homeRange = sheetHome.getRange(2,i).setValue(dbaseRange);
}
}
function update() {
  for (i=2; i< sheetHome.getLastColumn()+1; i++) {
var homeRange = sheetHome.getRange(2,i).getValue();
var dbaseRange = sheetDbase.getRange((nameIdx + 1),i).setValue(homeRange);
}
}
function delet() {
var nameIdx2 = sheetDbase.getRange('a1:a').getValues().join().split(',').indexOf(nameHome)+1;
var deleteRow = sheetDbase.deleteRow(nameIdx2);
Logger.log(deleteRow);
}
