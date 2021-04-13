builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oWorksheet.GetRange("A1").SetValue("1");
oWorksheet.GetRange("B1").SetValue("2");
Api.AddDefName("numbers", "Sheet1!$A$1:$B$1");
oDefName = Api.GetDefName("numbers");
oRange = oDefName.GetRefersToRange();
oRange.SetBold(true);
builder.SaveFile("xlsx", "GetRefersToRange.xlsx");
builder.CloseFile();