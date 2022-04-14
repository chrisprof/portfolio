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
