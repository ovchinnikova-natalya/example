builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample text.");
oText = oParagraph.GetText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("The text of the first paragraph: " + oText);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetText.docx");
builder.CloseFile();