let bagItems;
onLoad();
function onLoad(){
let bagItemStr=localStorage.getItem('bagItem');
bagItems=bagItemStr ? JSON.parse(bagItemStr) :[];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItem',JSON.stringify(bagItems));
displayBagIcon();
}
function displayBagIcon(){
  let bagItemCountElement=document.querySelector('.bag-item-count');
  if(bagItems.length>0){
    bagItemCountElement.style.visibility ='visible'
    bagItemCountElement.innerText=bagItems.length;
  }
  else{
  bagItemCountElement.style.visibility ='hidden';
}
}


function displayItemsOnHomePage(){
let items_container=document.querySelector('.items_container');
if(!items_container){
  return;
}
let innerHTML='';
items.forEach(items =>{
  innerHTML+=
`
<div class="item_container">
<img class="item_image" src="${items.item_image}" height="200" width="200">
<div class="rating">${items.rating.stars} ⭐ ${items.rating.noOfreview}</div>
<div class="company">${items.company}</div>
<div class="item_name">${items.item_name}</div>
<div class="price">
<span class="current_price">₹${items.current_price}</span>
<span class="original_price">₹${items.original_price}</span>
<span class="discount">${items.discount}% off</span>
</div>
<button class="addbag" onclick="addToBag('${items.id}')">Add to Bag</button>
</div>`
});
items_container.innerHTML=innerHTML;
};