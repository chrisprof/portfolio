function redirect(url)
{
    window.location.href = url;
}

function error(err)
{
    switch(err){
        case 'wndw':
            window.alert("You're already on this window!")
            break
    }
}


let images = ['freepages.png','serv.png','vhab.png','eggman.png']
let links = ['freepagesjc.web.app','serv-3529c.web.app','www.vhab.xyz','chrisprof.github.io/eggman/']
var image=0
function changeImg()
{
    document.getElementById("projImage").src=images[image]
    document.getElementById("btnAnchor").href='http://'+links[image]
    console.log(image)
    if(image==images.length-1)
    {
        image=0
    }
    else{
        image++
    }

}