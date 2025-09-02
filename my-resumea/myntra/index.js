
let bagItems ;
onload();


function onload(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}

function addToBag(itemID){
    bagItems.push( itemID);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
  let bagitemcount = document.querySelector(".bag-item-count")

  if(bagItems.length > 0){
bagitemcount.style.visibility = 'visible'
    bagitemcount.innerHTML= bagItems.length;
  }else{
    bagitemcount.style.visibility = 'hidden'
  }
};




function displayItemsOnHomePage(){

let itemscontainer = document.querySelector('.items-container');

if(!itemscontainer){return;}

let innerHtml='';
items.forEach(items=>{
innerHtml += `<div class="item-container">
       <img class="item-image" src="${items.image}" alt="img">
       <div class="rating"> ${items.rating.stars}⭐ | ${items.rating.count}  </div>
       <div class="company-name">${items.company}</div>
       <div class="item-name">${items.item_name}</div>

       <div class="price">
      <span class="current-price">Rs.${items.current_price}</span>
      <span class="original-price">Rs.${items.original_price}</span>
      <span class="discount">(${items.discount_percentage}% OFF)</span>
       </div>
       <button class="btn-add-bag" onclick="addToBag(${ items.id})" >Add To Bag</button>

     </div>`
});
itemscontainer.innerHTML = innerHtml;

};

