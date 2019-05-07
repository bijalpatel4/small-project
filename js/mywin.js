function loadURl(url){
    opener.location = url;  
    window.close(); 
}

var win = null;

function popUpWindow(url) {
 if (win == null) {
 	win = window.open(url, null, "width=300,height=300,resizable,dependent,scrollbars");
 	win.focus();
 }
 else {
 	win.location = url;
 	win.focus();
 }
}    




