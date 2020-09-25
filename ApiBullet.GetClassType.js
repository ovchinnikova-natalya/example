builder.CreateFile("docx");
var Document = Api.GetDocument();
var Paragraph = Document.GetElement(0);
var Bullet = Api.CreateBullet("-");
Paragraph.SetBullet(Bullet);
Paragraph.AddText("This is an example of the bulleted paragraph.");
var ClassType = Bullet.GetClassType();
Paragraph = Api.CreateParagraph();
Paragraph.AddText("Class Type = " + ClassType);
Document.Push(Paragraph);
builder.SaveFile("docx", "GetClassType.docx");
builder.CloseFile();