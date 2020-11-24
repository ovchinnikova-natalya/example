builder.CreateFile("xlsx");
oWorksheet = Api.GetActiveSheet();
oFill = Api.CreateSolidFill(Api.CreateRGBColor(104, 155, 104));
oStroke = Api.CreateStroke(0, Api.CreateNoFill());
oShape = oWorksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, oFill, oStroke, 0, 2 * 36000, 0, 3 * 36000);
oDocContent = oShape.GetDocContent();
oParagraph = oDocContent.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("This is a sample text with paddings set to it.");
oParagraph.AddElement(oRun);
oShape.SetPaddings(20 * 36000, 5 * 36000, 5 * 36000, 3 * 36000);
builder.SaveFile("xlsx", "SetPaddings.xlsx");
builder.CloseFile();