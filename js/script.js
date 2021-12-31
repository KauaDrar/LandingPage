$("#cep").mask("00.000-000");

function checkDevice() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true; // está utilizando celular
     }
    else {
       return false; // não é celular
     }
   }
window.onload = checkDevice();

if(checkDevice() == false){
    document.getElementById("imagem").style.cursor = 'zoom-in';
    imagem = document.getElementById("imagem");
    selecionado = document.querySelector("#imagem img");

    imagem.addEventListener("click", function(e){
        if(document.getElementById("imagem").style.cursor == 'zoom-in'){
            document.getElementById("imagem").style.cursor = 'zoom-out';
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            selecionado.style.transformOrigin = `${x}px ${y}px`;
            selecionado.style.transform = "scale(3)";
        }
        else if(document.getElementById("imagem").style.cursor == 'zoom-out'){
            document.getElementById("imagem").style.cursor = 'zoom-in';
            selecionado.style.transformaOrigin = "center center";
            selecionado.style.transform = "scale(1)";
        }
        imagem.addEventListener("mousemove", (e) =>{
            if(document.getElementById("imagem").style.cursor == 'zoom-out'){
                const x = e.clientX - e.target.offsetLeft;
                const y = e.clientY - e.target.offsetTop;
    
                console.log(x, y);
    
                selecionado.style.transformOrigin = `${x}px ${y}px`;
                selecionado.style.transform = "scale(3)";
            }
        });
    });
}
else if (checkDevice() == true){
    
}


startList = function() {
    if (document.all&&document.getElementById) {
    navRoot = document.getElementById("menuDropDown");
    for (i=0; i<navRoot.childNodes.length; i++) {
    node = navRoot.childNodes[i];
    if (node.nodeName=="LI") {
    node.onmouseover=function() {
    this.className+=" over";
      }
      node.onmouseout=function() {
      this.className=this.className.replace
      (" over", "");
       }
       }
      }
     }
    }
    window.onload=startList;


document.querySelector(".img1").addEventListener("click", function(){
    document.querySelector("#imagem img").src = document.querySelector(".img1").getAttribute('src');
    document.querySelector(".img1").style.border = '2px solid #489b89';
    document.querySelector(".img2").style.border = '2px solid #306e63';
    document.querySelector(".img3").style.border = '2px solid #306e63';
    document.querySelector(".img4").style.border = '2px solid #306e63';
});
document.querySelector(".img2").addEventListener("click", function(){
    document.querySelector("#imagem img").src = document.querySelector(".img2").getAttribute('src');
    document.querySelector(".img1").style.border = '2px solid #306e63';
    document.querySelector(".img2").style.border = '2px solid #489b89';
    document.querySelector(".img3").style.border = '2px solid #306e63';
    document.querySelector(".img4").style.border = '2px solid #306e63';
});
document.querySelector(".img3").addEventListener("click", function(){
    document.querySelector("#imagem img").src = document.querySelector(".img3").getAttribute('src');
    document.querySelector(".img1").style.border = '2px solid #306e63';
    document.querySelector(".img2").style.border = '2px solid #306e63';
    document.querySelector(".img3").style.border = '2px solid #489b89';
    document.querySelector(".img4").style.border = '2px solid #306e63';
});
document.querySelector(".img4").addEventListener("click", function(){
    document.querySelector("#imagem img").src = document.querySelector(".img4").getAttribute('src');
    document.querySelector(".img1").style.border = '2px solid #306e63';
    document.querySelector(".img2").style.border = '2px solid #306e63';
    document.querySelector(".img3").style.border = '2px solid #306e63';
    document.querySelector(".img4").style.border = '2px solid #489b89';
});

document.querySelector(".heart").addEventListener("click", function(){
    console.log(document.querySelector(".heart").src);
    if(document.querySelector(".heart").src == document.querySelector(".heart1").src){
        document.querySelector(".heart").src = document.querySelector(".heart2").src;
    }
    else if(document.querySelector(".heart").src == document.querySelector(".heart2").src){
        document.querySelector(".heart").src = document.querySelector(".heart1").src;
    }
});
    
