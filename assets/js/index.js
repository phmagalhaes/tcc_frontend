const banner = document.getElementById("banner");
function carrossel(){
    let i = 1;
    setInterval(() => {
        if(i < 8){
            banner.style.backgroundImage = `url('../assets/images/index/${i}.jpg')`
            i++
        } else{
            i = 1
            banner.style.backgroundImage = `url('../assets/images/index/${i}.jpg')`
        }
    }, 4000);
}
carrossel()