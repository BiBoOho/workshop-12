const count = 10;
const apikey='MnMdvK_pnkwI1k2-T3vqgsOPZiVGtbIEp01KDj2vKM8';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


const imageContainer = document.getElementById('img-container');

let photoArrays = [];

async function getPhotos() {
    try{
        const response = await fetch(apiUrl);
        photoArrays = await response.json();
        displayImage();
    }catch(err){
        console.log(err);
    }
}

function displayImage() {
    photoArrays.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','blank');

        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt',photo.alt_description);

        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

window.addEventListener('scroll', ()=> {
    if(window.innerHeight+window.scrollY >= document.body.offsetHeight-100) {
        //ດືງຂໍ້ມູນມາສະແດງ
       getPhotos();
    }
});

getPhotos();