builder.CreateFile("docx");
oDocument = Api.GetDocument();
oTableStyle = oDocument.CreateStyle("CustomTableStyle", "table");
oTableStyle.SetBasedOn(oDocument.GetStyle("Bordered - Accent 5"));
oTable = Api.CreateTable(3, 3);
oTable.SetWidth("percent", 100);
oTable.SetStyle(oTableStyle);
oDocument.Push(oTable);
oCell = oTable.GetCell(0, 0);
oCell.GetContent().GetElement(0).AddText("Cell #1");
builder.SaveFile("docx", "GetCell.docx");
builder.CloseFile();