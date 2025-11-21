const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName:"Colonia Juarez",
    location:"Chihuahua Mexico",
    dedicated: "1999, March, 7",
    area: 6800,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/colonia-juarez-chihuahua-mexico/400x250/colonia-juarez-mexico-temple-lds-126123-wallpaper.jpg"
  },
  {
    templeName:"Winter Quarters Nebraska",
    location:"Omaha Nebraska",
    dedicated: "2001, April, 22",
    area: 16000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
  },
  {
    templeName:"Washington DC",
    location:"Washington DC, Maryland",
    dedicated: "1974, November, 22",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/exterior_washington_dc_temple.jpeg"
  }

];

generateListenerFilters()

function temple_Template(temple){

const templehtml=
    `<div class = "figure">
        <h1>${temple.templeName}</h1>
        <p><span class="purple">Location:</span> ${temple.location}</p>
        <p><span class="purple">Dedicated:</span> ${temple.dedicated}</p>
        <p><span class="purple">Size:</span> ${temple.area} sq ft</p>

        <img src=${temple.imageUrl} alt="${temple.templeName} temple" loading="lazy"/>
    </div>`
    return templehtml
}

function filterfunc(word){
   let filter = []
    if (word === 'old'){
        temples.filter(t =>{
            const year = parseInt(t.dedicated.slice(0, 4))
            if (year < 1900) filter.push(t)
        })
    }
    else if(word === 'new'){
        temples.filter(t =>{
            const year = parseInt(t.dedicated.slice(0, 4))
            if (year > 2000) filter.push(t)
        })
    }
    else if(word === 'large'){
        temples.filter(t => {
            if (t.area > 90000) filter.push(t)
        })
    }
    else if(word === 'small'){
        temples. filter(t => {
            if (t.area < 10000) filter.push(t)
        })
    }
   else{
    filter = temples;
   }
   generateTemple(filter);
}

function generateListenerFilters(){
    const old = document.querySelector("#Old")
    const newish = document.querySelector('#New')
    const home = document.querySelector('#Home')
    const large = document.querySelector('#Large')
    const small = document.querySelector('#Small')
    
    old.addEventListener('click',() => filterfunc('old'))
    newish.addEventListener('click',() => filterfunc('new'))
    home.addEventListener('click',() => filterfunc('home'))
    large.addEventListener('click',() => filterfunc('large'))
    small.addEventListener('click',() => filterfunc('small'))
    filterfunc('temple')

}



function generateTemple(filter){
const container = document.querySelector(".container")
const html_items = filter.map(temple_Template)
container.innerHTML = html_items.join('')}