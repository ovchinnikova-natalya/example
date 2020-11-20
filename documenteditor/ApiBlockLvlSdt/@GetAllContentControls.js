builder.CreateFile("docx");
oDocument = Api.GetDocument();
oBlockLvlSdt = Api.CreateBlockLvlSdt();
oBlockLvlSdt1 = Api.CreateBlockLvlSdt();
oBlockLvlSdt1.AddText("This is the first block text content control.");
oBlockLvlSdt2 = Api.CreateBlockLvlSdt();
oBlockLvlSdt2.AddText("This is the second block text content control.");
oBlockLvlSdt.Push(oBlockLvlSdt1);
oBlockLvlSdt.Push(oBlockLvlSdt2);
oDocument.AddElement(0, oBlockLvlSdt);
aContentControls = oBlockLvlSdt.GetAllContentControls();
aContentControls[0].GetContent().GetElement(0).SetBold(true);
oClassType = aContentControls[0].GetClassType();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Class type: " + oClassType);
oDocument.Push(oParagraph);
builder.SaveFile("docx", "GetAllContentControls.docx");
builder.CloseFile();