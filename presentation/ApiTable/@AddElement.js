builder.CreateFile("pptx");
var oPresentation = Api.GetPresentation();
var oTable = Api.CreateTable(2, 4);
oTable.SetPosition(608400, 1267200);
var oRow = oTable.GetRow(0);
var oCell = oRow.GetCell(0);
var oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is just a sample text.");
oTable.AddElement(oCell, 1, oParagraph);
var oSlide = oPresentation.GetSlideByIndex(0);
oSlide.RemoveAllObjects();
oSlide.AddObject(oTable);
builder.SaveFile("pptx", "AddElement.pptx");
builder.CloseFile();