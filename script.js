
var cardStart =`<div class="card car-img" style="width: 30rem;"><img class="card-img-top" src="./Images/`
var cardMiddle = `" alt="Card image cap"><div class="card-body"><h5 class="card-title">`
var cardMiddle2 =`</h5><p class="card-text">`
var cardEnd = `</p></div></div>`

var priceStart = `<br/><p>Price: $`
var priceEnd = `.99</p>`
{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

const foodImgs = ['tacos.png','burrito.png','chips&Salsa.png','carnitas.jpeg','tamales.jpg','quesadilla.jpg']
const foodDesc = [
    'A Mexican dish consisting of a fried tortilla, typically folded, filled with various mixtures, such as seasoned meat, beans, lettuce, and tomatoes.',
    'One burrito, choice of steak or chicken, covered with nacho cheese, lettuce, tomato and sour cream, served with rice or beans',
    'Chips served with melted or shredded cheese, although often other toppings are added or substituted, such as meat, salsa (such as pico de gallo), refried beans, guacamole, sour cream, diced onions, olives, and pickled jalapeños.',
    'Pork chunks cooked golden brown, delicately seasoned with our secret spices and herbs, served with rice, beans and tortillas',
    'traditional Mesoamerican dish, steamed in a corn husk or banana leaf, can be filled with meats, cheeses, fruits, vegetables, chilies .',
    'Sweet pineapple pairs perfectly with shredded chicken and gooey cheddar cheese in this delicious quesadilla.',

]
const foodPrice = [12, 8, 4 , 11, 7, 6]

foodImgs.forEach( (item, desc) => {
    $('.cards').append( cardStart+
        item+
        cardMiddle+
        item.slice(0,item.length-4).toUpperCase()+
        cardMiddle2+foodDesc[desc]+
        priceStart+foodPrice[desc]+
        priceEnd+
        cardEnd ) 
})
function updateDirections() {
    //console.log(document.getElementById('search').value)
    document.getElementById('startAddressSearch').href = 
        `https://maps.google.com/maps/dir/${document.getElementById("search").value}/Bermuda+Triangle+Rd,+Bermuda,+VA+23836`
}