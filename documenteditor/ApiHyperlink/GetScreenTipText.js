builder.CreateFile("docx");
oDocument = Api.GetDocument();
oParagraph = oDocument.GetElement(0);
oRun = Api.CreateRun();
oRun.AddText("ONLYOFFICE Document Builder");
oParagraph.AddElement(oRun);
oHyperlink = oParagraph.AddHyperlink("http://api.teamlab.info/docbuilder/basic");
oHyperlink.SetScreenTipText("ONLYOFFICE for developers");
oScreenTipText = oHyperlink.GetScreenTipText();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Screen tip text: " + oScreenTipText);
builder.SaveFile("docx", "GetScreenTipText.docx");
builder.CloseFile();