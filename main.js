function exportDoc() {
    document.body.style.cursor = "progress"
	document.getElementById("buttons").style.display = "none"
	document.getElementById("printableplace").style.padding = "50px"
    html2canvas(document.getElementById("printableplace"), { letterRendering: 1, allowTaint : true, onrendered : function (canvas) { } }).then(function(canvas){
        var canvas = document.body.appendChild(canvas)
        canvas.toBlob(function(blob) {
			if (document.getElementById("studentName").innerHTML != "Öğrenci İsmi") {
				saveAs(blob, document.getElementById("studentName").innerHTML + " Ders Programı.png");
			} else {
				saveAs(blob, "Ders Programı.png");
			}
			document.getElementById("buttons").style.display = "flex"
			document.getElementById("printableplace").style.padding = ""
            document.body.style.cursor = ""
        });
		canvas.style.display = "none"
    })
}

function resetDocument() {
	document.getElementById("studentName").innerHTML = "Öğrenci İsmi"
	document.getElementById("studentClass").innerHTML = "Sınıf"
	document.getElementById("printableplace").innerHTML = '<table><div class="hstack"><h2 id="studentName" contenteditable="true">Öğrenci İsmi</h2><h2 id="studentClass" contenteditable="true">Sınıf</h2></div><tr class="firsttr"><td contenteditable="true">Günler</td><td>Pazartesi</td><td>Salı</td><td>Çarşamba</td><td>Perşembe</td><td>Cuma</td><td>Cumartesi</td><td>Pazar</td></tr><tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr><tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr><tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr><tr><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td><td contenteditable="true"></td></tr></table><div id="buttons" class="hstack"><div class="container"> <button onclick="exportDoc()">Dışa Aktar</button></div> <button onclick="resetDocument()">Sıfırla</button></div>'
}