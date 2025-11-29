const products = ["Wet Vac", "Super Vac", "DuraClean", "Mop Dry"]

let product_options = document.getElementById('product_name')

product_options.innerHTML =`<option selected disabled value="">Choose a Product ...</option>`

products.forEach(product => {
    product_options.innerHTML += `<option value=${product}>${product}</option>` 
    
});

document.querySelector('form').addEventListener("submit",function(event) {
    event.preventDefault();
    let reviewCount = localStorage.getItem('reviewCount')|| 0
    reviewCount = parseInt(reviewCount) + 1
    localStorage.setItem('reviewCount', reviewCount)
    alert(`Thank You! You have completed ${reviewCount} review(s).`)

    document.querySelector('form').reset();
})