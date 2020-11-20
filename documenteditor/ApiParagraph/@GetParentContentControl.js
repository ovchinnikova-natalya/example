builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("This is an inline text content control.");
oDocument.Push(0, oBlockLvlSdt);
oParagraph = Api.CreateParagraph();
oParagraph.AddText("This is a paragraph added to the inline text content control.");
oBlockLvlSdt.AddElement(oParagraph);
oParentBlockLvlSdt = oParagraph.GetParentContentControl();
oParentBlockLvlSdt.GetRange(0, 3).SetBold(true);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();