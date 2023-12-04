function myClass(myScreen, myKeyboard) {
 
    this.screen = document.querySelector("#" + myScreen) || 0;
    this.keyboard = document.querySelector("#" + myKeyboard) || 0;
    this.keyboardLines = [];
    
    for(var i = 0; i < keyboard.childNodes.length; i++) {
        if(keyboard.childNodes[i].nodeType == 1) 
            keyboardLines.push(keyboard.childNodes[i]);
    }
    
    for(var i = 0; i < keyboardLines.length; i++) {
        keyboardLines[i].onclick = function(event) {
            var target = event.target;
            if(target == keyboard || target == keyboardLines[i])
                return;
            screen.innerHTML += target.innerHTML;
        };      
    }
    
}
myClass("windowScreen", "keyboard");