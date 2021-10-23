var devOrientation = '';
//decide whether navigation bar will show right or left arrow; make mobile compatible
function decideLorR(x){
    if(x.matches){
        devOrientation = 'portrait';
    }else{
        devOrientation = 'landscape';
    }
}

var x = window.matchMedia("(orientation: portrait)");
decideLorR(x);

if(devOrientation === 'portrait'){
    document.getElementsByClassName('linkHolder')[2].style.marginBottom = '13%';
    document.getElementsByClassName('textHolder')[5].style.marginBottom = '13%';
    document.getElementsByClassName('referenceText')[3].style.marginBottom = '13%';
}
