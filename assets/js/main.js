
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

    if (counter === ) {
        img.classList.remove('hidden')

    }


}

nextButton.addEventListener('click', function addCounter() {
    counter++
    console.log(counter);


}

)






