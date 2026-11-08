const user_items = [
    
    {
      "name": "example",   
      "season": "winter",
      "image": "images/winter/jacket_brown.png",
      "colour": "brown",
      "price": 99.99,
      "discount": "-25%"
    }
]

let form = document.querySelector('form')

let remove_button = document.querySelector('.cards');

function submitItems() {
    alert("Items submitted! We'll be in touch with you shortly.")
    location.reload()
}


// Display_items
const display_user_items = () => {
 document.querySelector(".cards").textContent = "";

    user_items.forEach(user_item => {



          document.querySelector('.cards').insertAdjacentHTML('beforeend',

      `<div class="card" id="card_${user_item.name}_${user_item.colour}">
    <img class="product" src="${user_item.image}" alt="${user_item.name}" >

    <div class="info">
      <h2>${user_item.name.charAt(0).toUpperCase() + user_item.name.slice(1)}<hr></h2>
      
      <div class="season">
      <p>Season: ${user_item.season}</p>
    </div>

      <div class="colour">
	    <p><span class="colour_border" id="${user_item.colour}">Colour: ${user_item.colour}</span></p>
    </div>


      <div class="sizes_options" >
      <input type="radio" name="sizes_${user_item.name}_${user_item.colour}" id="small_${user_item.name}_${user_item.colour}">
      <label for="small_${user_item.name}_${user_item.colour}">Small</label><br>

      <input type="radio" name="sizes_${user_item.name}_${user_item.colour}" id="medium_${user_item.name}_${user_item.colour}" checked>
      <label for="medium_${user_item.name}_${user_item.colour}">Medium</label><br>

      <input type="radio" name="sizes_${user_item.name}_${user_item.colour}" id="large_${user_item.name}_${user_item.colour}">
      <label for="large_${user_item.name}_${user_item.colour}">Large</label>

      <input type="radio" name="sizes_${user_item.name}_${user_item.colour}" id="x-large_${user_item.name}_${user_item.colour}">
      <label for="x-large_${user_item.name}_${user_item.colour}">X-Large</label><br>
     </div>


    
     <div class="price">  

     <div id="discount">
     <p>${user_item.discount}</p>
     </div>

     <p class="price_border">&#8364 ${user_item.price}<p>
    </div>

      <div class="quantity">
      <input type="number" class="items_number" name="quantity" min="1" max="20" value="1"> 
    </div>

      <div class="add_to_cart">
      <input type="button" class="cart_button"  onclick="count()" id="cart_${user_item.name}_${user_item.colour}"  cursor="pointer" value="Add to cart  &#10143" >
      </div>

        <input type="button" class="remove_user_item" onclick="" id = ${user_item.name} cursor="pointer" value="Remove item">


   </div>`) 

    })
    
  
    }





// Delete user item
remove_button.addEventListener('click', (evt) => {

  if (evt.target.matches('.remove_user_item')) { 
    delete_item = user_items.findIndex((user_item) => user_item.name = evt.target.id);

       user_items.splice(delete_item, 1);
    display_user_items()
}
  })

//Error during image upload
function image_error() {
  product_image = "images/placeholder_image.png"
}
// Add user item
    const add_user_item = (evt) => {
       evt.preventDefault(); 

      image = form.elements.file.files[0].name;
      product_image = "images/"+image;
      image_error()
      const new_user_item = {
      name: form.elements.product_name.value,   
      season: form.elements.season_select.value,
      image: product_image,
      colour: form.elements.item_colour.value,
      price: form.elements.item_price.value,
      discount: `-${form.elements.item_discount.value}%`,
      };
      
      user_items.push(new_user_item);
      display_user_items();
      form.reset();
    }
    



display_user_items();


// Event Listener
form.addEventListener('submit', add_user_item)