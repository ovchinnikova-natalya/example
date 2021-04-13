builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oParagraph = Api.CreateParagraph();
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text.");
oParagraph.AddElement(oRun);
oCell = oTable.GetCell(0,0);
oTable.AddElement(oCell, 0, oParagraph);
oParentTableCell = oRun.GetParentTableCell();
oParentTableCell.SetShd("clear", 0xff, 0x68, 0x00, false);
builder.SaveFile("docx", "GetParentTableCell.docx");
builder.CloseFile();