let bagitem=[];






onlode();

let checkb= document.querySelector('#checkbtn');
let ul =document.querySelector('nav');
checkb.addEventListener('click',()=>
{
    ul.classList.toggle("showdata");
    console.log(ul);
});

function onlode()
{
  let bagstr= localStorage.getItem('bagitem');
  bagitem=bagstr?JSON.parse(bagstr):[];
displayitemonhomepage();
addicon();
}




function addtobag(itemid)
{
bagitem.push(itemid);
localStorage.setItem('bagitem',JSON.stringify(bagitem));
addicon();
}
function addicon()
{
  let butcounter=document.querySelector('.bag-item-count');
  if(bagitem.length>0)
  {

  butcounter.style.visibility='visible';
 
  butcounter.innerText=bagitem.length;
  }
  else
  {
    butcounter.style.visibility='hidden';
  }

}

function displayitemonhomepage()
{
let innervalue='';
let item_container=document.querySelector('.items-container');
if(!item_container)
  {
    return;
  }
 items.forEach(item => {
innervalue+=`<div class="item-container">
    <img src="${item.image}"class="image-item" alt="logo">
    <div class="rating">${item.rating.stars}|${item.rating.count}</div>
    <div class="compony-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">${item.current_price}</span>
      <span class="orignal-price">${item.original_price}</span>
      <span class="discount-price">(${item.discount_percentage}%)</span>
    </div>
    <button class="addbag" onclick="addtobag(${item.id})">add to bag</button>
  </div>`
  
});
item_container.innerHTML=innervalue;
}



