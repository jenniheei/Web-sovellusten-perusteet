const getRandomNumber = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    let dice = document.getElementById('image')
    dice.src = "./img/"+number+".png"
}

