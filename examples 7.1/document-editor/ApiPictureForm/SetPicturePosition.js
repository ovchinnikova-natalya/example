builder.CreateFile("docx");
var oDocument = Api.GetDocument();
var oPictureForm = Api.CreatePictureForm({"key": "Personal information", "tip": "Upload your photo", "required": true, "placeholder": "Photo", "scaleFlag": "tooBig", "lockAspectRatio": true, "respectBorders": false});
var oParagraph = oDocument.GetElement(0);
oParagraph.AddElement(oPictureForm);
oPictureForm.SetImage("https://api.onlyoffice.com/content/img/editor/e-download.png");
oPictureForm.SetPicturePosition(70, 70);
var aPosition = oPictureForm.GetPicturePosition();
oParagraph = Api.CreateParagraph();
oParagraph.AddText("Picture position: ");
oParagraph.AddLineBreak();
for (let i = 0; i < aPosition.length; i++ ){
    var nShift = aPosition[i];
    oParagraph.AddText("" + nShift);
    oParagraph.AddLineBreak();
}
oDocument.Push(oParagraph);
builder.SaveFile("docx", "SetPicturePosition.docx");
builder.CloseFile();