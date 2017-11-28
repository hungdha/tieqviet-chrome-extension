// Listen for toolbar icon clicks
var clickCnt = 0;
chrome.browserAction.onClicked.addListener(function(tab){
    clickCnt++; 
    if(clickCnt > 1){       
        alert('Double click detected');
        clickCnt = 0;
        clearTimeout(timer);
    }else{                          
        if(ctrlPressed){
            if(altPressed){
                console.log('ctrl-alt-click detected');
            }else{
                console.log('ctrl-click detected');
            }
        }
        timer = setTimeout(function(){  
            console.log('Single click detected');
            clickCnt = 0;
        }, 250);
    }
    window.focus()
});