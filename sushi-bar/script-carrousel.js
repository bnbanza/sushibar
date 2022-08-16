var images = ['img/banners1.jpg', 'img/banners2.jpg'],
    cont = 0;

function carrousel (container){
    container.addEventListener('click', e=> {
        let back= container.querySelector('.back'),
            go = container.querySelector('.go'),
            img= container.querySelector('img'),
            tgt= e.target;

        if (tgt==back) {
            if (cont > 0) {
                img.src = images[cont - 1];
                cont--; 
            } else {
                img.src= images[images.length - 1];
                cont = images.length - 1;
            }
        } else if (tgt==go){
            if (cont < images.length - 1) {
                img.src = images[cont + 1];
                cont++; 
            } else {
                img.src= images[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let container= document.querySelector('.container-carrousel');

    carrousel(container);
})