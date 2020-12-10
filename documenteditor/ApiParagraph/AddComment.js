builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oParagraph.AddText("This is just a sample paragraph.");
oParagraph.AddLineBreak();
oParagraph.AddText("The comment was added to this document.");
oParagraph.AddComment("comment", "Jane");
builder.SaveFile("docx", "AddComment.docx");
builder.CloseFile();