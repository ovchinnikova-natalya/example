builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oInlineLvlSdt1 = Api.CreateInlineLvlSdt();
oInlineLvlSdt1.AddText("This is a parent inline text content control.");
oParagraph.AddInlineLvlSdt(oInlineLvlSdt1);
oInlineLvlSdt2 = Api.CreateInlineLvlSdt();
oInlineLvlSdt2.AddText("This is an inline text content control added in another content control.");
oInlineLvlSdt1.AddElement(oInlineLvlSdt2, 0);
oParentInlineLvlSdt = oInlineLvlSdt2.GetParentContentControl();
oRun = Api.CreateRun();
oRun.AddText("This is just a sample text in a parent content control.");
oParentInlineLvlSdt.AddElement(oRun, 1);
builder.SaveFile("docx", "GetParentContentControl.docx");
builder.CloseFile();