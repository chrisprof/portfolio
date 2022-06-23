function redirect(url)
{
    window.location.href = url;
}

//0 = Names, 1 = Images, 2 = Links | 2D Array
let info = [['freepages','freepages.png','freepagesjc.web.app'],
            ['serv','serv.png','serv-3529c.web.app'],
            ['eggman','eggman.png','chrisprof.github.io/eggman/']]

var placement=1
function changeImg()
{
    //title 0
    document.getElementById('proj-cont-child-title').innerHTML=info[placement][0]

    //image 1 
    document.getElementById("proj-image").src='./static/images/'+info[placement][1]

    //link 2
    document.getElementById("btn-anchor").href='http://'+info[placement][2]
    console.log(placement)
    if(placement==info.length-1)
    {
        placement=0
    }
    else{
        placement++
    }

}