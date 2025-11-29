const products = ["Wet Vac", "Super Vac", "DuraClean", "Mop Dry"]

let product_options = document.getElementById('product_name')

product_options.innerHTML =`<option selected disabled value="">Choose a Product ...</option>`

products.forEach(product => {
    product_options.innerHTML += `<option value=${product}>${product}</option>` 
    
});

