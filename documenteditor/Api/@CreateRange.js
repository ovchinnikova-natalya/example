builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("ONLYOFFICE Document Builder");
oRange = Api.CreateRange(oParagraph, 0, 9);
oRange.SetBold(true);
builder.SaveFile("docx", "CreateRange.docx");
builder.CloseFile();