builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt.AddText("This is a block text content control.");
oDocument.AddElement(0, oBlockLvlSdt);
oBlockLvlSdt.Delete(false);
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("The block text content control was removed from the document.")
builder.SaveFile("docx", "Delete.docx");
builder.CloseFile();