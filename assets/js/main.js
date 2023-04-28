
const imgArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
]

/*  console.log(imgArray); */

const sliderElement = document.querySelector('.img_slider')
const nextButton = document.getElementById('next')



/* devo aggungere le img al html */

let counter = 0

for (let i = 0; i < imgArray.length; i++) {
    const thisImageP = imgArray[i];



    const img = document.createElement("img");
    img.classList.add('img-fluid', 'hidden')
    img.src = `${thisImageP}`;
    sliderElement.appendChild(img)

    if (counter === i) {
        img.classList.remove('hidden')
    }


}

const allImg = document.querySelectorAll('.img_slider>img')
console.log(allImg);
/* ale seleziona tutte le img */

nextButton.addEventListener('click', function () {

    const currentImg = allImg[counter]
    /* prende l'img corrente dall'array sfruttano [indice] counter*/
    currentImg.classList.add('hidden')
    /* aggiungo la classe hidden all'img selezionata */

    if (counter === imgArray.length - 1) {

        counter = 0
        // se il counter supera la lunghezza dell'array allora lo setto 0

    } else {
        counter++
        /* aumento il counter */

    }

    const nextImg = allImg[counter]

    nextImg.classList.remove('hidden')
}

)






