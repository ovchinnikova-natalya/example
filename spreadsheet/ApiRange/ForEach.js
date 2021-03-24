builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
oWorksheet.GetRange("C1").SetValue("3");
oRange = oWorksheet.GetRange("A1:C1");
oRange.ForEach(function (range) {
    sValue = range.GetValue();
    if (sValue !== '1') {
        range.SetBold(true);
    }
});
builder.SaveFile("xlsx", "ForEach.xlsx");
builder.CloseFile();