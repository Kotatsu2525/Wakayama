document.body.addEventListener('click',function(event){
    const screenWidth = window.innerWidth;
    const clickX = event.clientX;
    if(clickX > screenWidth / 2){
        alert("tes2")
        //window.location.href = 'wakayama2.html';
    }
})
