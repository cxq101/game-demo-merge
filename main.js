var nPercent=0;
var libArr = [];
var loadLibUrl;
var onePercent = 0;
function loadLib(url) {
    if(url.indexOf("webgl") > 0 && isIE()) return;
    var arg = getCdnArg();
    if(arg.cdn && arg.binVersion){
        url = arg.cdn + arg.binVersion + "/" + url;
    }
    libArr.push(url); 
}
function nextLoadLib(){
    if(libArr.length <= 0) return;
    loadLibUrl = libArr[0];
    var script = document.createElement("script");
    script.async = false;
    script.src = loadLibUrl;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
    script.onerror = function(){
        nextLoadLib();
    }
    script.onload = function(){
        console.log("script.onload:", loadLibUrl);
        libArr.shift();
        if(libArr.length > 0){
            nPercent += onePercent;
            var nextPercent = nPercent + onePercent;
            if(nPercent >= 70){
                nextPercent = 99;
            }
            showLoadProgress(nPercent, "(loading...)", nextPercent);
            nextLoadLib();
        }
    }
}
function getFileVer(){
    return "";
}
function isIE() { 
    if (!!window.ActiveXObject || "ActiveXObject" in window)
        return true;
    else
        return false;
}

function enterGame() {
    showLoadProgress(0, "(loading...)");
    loadLib("index.js");
    onePercent = 70 / 12;//12为loadlib要加载的总文件数减去1
    nextLoadLib();
 }