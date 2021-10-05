function handleKeydown(e)
{

}

const keys = document.querySelectorAll(".key");



keys.forEach( key =>
    {
        key.addEventListener("transitionend", (eve) => {
            
            if(eve.propertyName != "transform")
            {
                return;
            }
            key.classList.remove("playing");
        })
    })






window.addEventListener("keydown", e => {

    
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);

    if(!audio)return;
    audio.currentTime = 0;
    audio.play();

    const keytrans = document.querySelector(`div[data-key = "${e.keyCode}"]`);
 
    keytrans.classList.add("playing");
})



