let carts = document.querySelectorAll('.btn')
let products=[
    {
        name:'paneer tikka', 
        tag:'paneer-tikka',
        price:2,
        incart:0
    },
    {
        name:'palak oaneer',
        tag:'palak-pameer',
        price:3,
        incart:0
    },
    {
        name:'paneer masala', 
        tag:'paneer-masala',
        price:4,
        incart:0
    },
    {
        name:'paneer do pyaza',
        tag:'paneer-do-pyaza',
        price:5,
        incart:0
    },
    {
        name:'matar paneer',
        tag:'matar-paneer',
        price:6,
        incart:0
    },
    {
        name:'mushroom paneer',
        tag:'mushroom-paneer',
        price:3,
        incart:0
    },
    {
        name:'momos',
        tag:'momos',
        price: 4,
        incart:0
    },
    {
        name:'manchurian',
        tag:'manchurian',
        price:4,
        incart:0
    },
    {
        name:'chilli paneer',
        tag:'chilli-paneer',
        price: 9,
        incart:0
    },
    {
        name:'chowmein',
        tag:'chowmein',
        price: 2,
        incart:0
    },
    {
        name:'spring rolls',
        tag:'spring-rolls',
        price: 4,
        incart:0
    },
    {
        name:'fried rice',
        tag:'fried-rice',
        price: 4,
        incart:0
    },
    {
        name:'burger',
        tag:'burger',
        price: 6,
        incart:0
    },
    {
        name:'masala dosa',
        tag:'masala-dosa',
        price: 1,
        incart:0
    },
    {
        name:'idli',
        tag:'idli',
        price: 2,
        incart:0
    },
    {
        name:'mysore bonda',
        tag:'mysore-bonda',
        price: 3,
        incart:0
    },
    {
        name:'oniom uttapam',
        tag:'onion-uttapam',
        price: 5,
        incart:0
    },
    {
        name:'plain dosa',
        tag:'plain-dosa',
        price: 3,
        incart:0
    },
    {
        name:'rava uttapam',
        tag:'rava-uttapam',
        price: 2,
        incart:0
    },
    {
        name:'sambhar vada',
        tag:'sambhar-vada',
        price: 5,
        incart:0
    },
    {
        name:'veg kurma',
        tag:'veg-kurma',
        price: 3,
        incart:0
    },
    {
        name:'veg pakora',
        tag:'veg-pakora',
        price: 5,
        incart:0
    },
    {
        name:'navratan corma',
        tag:'navratan-corma',
        price: 6,
        incart:0
    },
    {
        name:'veg jalfrezi',
        tag:'veg-jalfrezi',
        price: 6,
        incart:0
    },
    {
        name:'veg biryani',
        tag:'veg-biryan',
        price: 4,
        incart:0
    },
    {
        name:'veg curry',
        tag:'veg-curry',
        price: 2,
        incart:0
    },
    {
        name:'veg kolhapur',
        tag:'veg-kolhapur',
        price: 3,
        incart:0
    },
    {
        name:'veg masala',
        tag:'veg-masala',
        price: 4,
        incart:0
    },
    {
        name:'ambar biryani',
        tag:'ambar-biryani',
        price: 5,
        incart:0
    },
    {
        name:'hyderabadi biryani',
        tag:'hyderabadi-biryani',
        price: 4,
        incart:0
    },
    {
        name:'egg biryani',
        tag:'egg-biryani',
        price: 7,
        incart:0
    },
    {
        name:'goan fish biryani',
        tag:'goan-fish-biryani',
        price: 4,
        incart:0
    },
    {
        name:'mutton biryani',
        tag:'mutton-biryani',
        price: 7,
        incart:0
    },
    {
        name:'kamrupi biryani',
        tag:'kamrupi-biryani',
        price: 5,
        incart:0
    },
    {
        name:'kashmiri biryani',
        tag:'kashmiri-biryani',
        price: 6,
        incart:0
    },
    {
        name:'pizza',
        tag:'pizza',
        price: 8,
        incart:0
    },
    {
        name:'sandwich',
        tag:'sandwich',
        price: 3,
        incart:0
    },
    {
        name:'maggy',
        tag:'maggy',
        price: 9,
        incart:0
    },
    {
        name:'muffin',
        tag:'muffin',
        price: 4,
        incart:0
    },
    {
        name:'taco',
        tag:'taco',
        price: 3,
        incart:0
    },
    {
        name:'milk shake',
        tag:'milk-shake',
        price: 5,
        incart:0
    },
    {
        name:'pan cake',
        tag:'pan-cake',
        price: 5,
        incart:0
    },
    {
        name:'tomato soup',
        tag:'tomato-soup',
        price: 2,
        incart:0
    },
    {
        name:'mushroom soup',
        tag:'mushroom-soup',
        price: 2,
        incart:0
    },
    {
        name:'spinach soup',
        tag:'spinach-soup',
        price: 1,
        incart:0
    },
    {
        name:'sweet corn soup',
        tag:'sweet-corn-soup',
        price: 4,
        incart:0
    },
    {
        name:'hot and sour soup',
        tag:'hot-and-sour-soup',
        price: 6,
        incart:0
    },
    {
        name:'manchow soup',
        tag:'manchow-soup',
        price: 4,
        incart:0
    },
    {
        name:'carrot soup',
        tag:'carrot-soup',
        price: 4,
        incart:0
    }

    
];
for(let i=0; i<carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalcost(products[i]);
})
}
function onloadcartnumber(){
    let productNumbers=localStorage.getItem('cartNumbers')
    if(productNumbers){
        document.querySelector('#z').textContent=productNumbers;

  }
}

function cartNumbers(product){
    
    let productNumbers=localStorage.getItem("cartNumbers")
   
    productNumbers=parseInt(productNumbers);
   if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('#z').textContent= productNumbers+1;
   }else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('#z').textContent=1;
   }
   setItems(product)
    
}
function setItems(product){
    let cartitems = localStorage.getItem('productsincart');
    cartitems=JSON.parse(cartitems);
   if (cartitems!= null){
       if(cartitems[product.tag] == undefined) {
           cartitems = {
               ...cartitems,
               [product.tag]:product
           }
       }
       cartitems[product.tag].incart +=1;
   }else{
       
   product.incart=1;
   cartitems={
      [product.tag]:product

             }
    }
   localStorage.setItem('productsincart',JSON.stringify(cartitems));
   
}
function totalcost(product){
    let cartcost = localStorage.getItem('totalcost')
   
     if( cartcost!=null){
         cartcost=parseInt(cartcost);
         localStorage.setItem('totalcost',cartcost+product.price );
 
     }else{
         localStorage.setItem('totalcost',product.price);
     }
     
 }
 function displaycart(){
    let cartitems=localStorage.getItem('productsincart');
    cartitems=JSON.parse(cartitems);
    let productcontainer=document.querySelector('.products');
    let cartcost = localStorage.getItem('totalcost');
    if(cartitems&&productcontainer){
        productcontainer.innerHTML='';
        Object.values(cartitems).map(item => {
            productcontainer.innerHTML+=`
            <div class="main"> 
                <div class="main-2"> 
                     <button class="close"><ion-icon name="close-circle"></ion-icon></button>
                     <img class="image" src="./image/${item.tag}.jpg">
                     <span class="name">${item.name}</span>
                </div>
                <div class="price">${item.price}$</div>
                <div class="quantity"> 
                    <button class="dcr"><ion-icon name="remove" ></ion-icon></button>
                    <span class='a'>${item.incart}</span>
                    <button class="icr"><ion-icon name="add" ></ion-icon></button>


                </div>
                <div class="total"> ${item.price * item.incart}$</div>
            </div> 
        
            `
        });
        productcontainer.innerHTML +=
        `   <div class="grand-total">
        <h4 class="gt"> grand total amount:<h4>
        <div class="gt2">${cartcost}$</>
        `    
        
        deleteButtons();
        manageQuantity();
    }

}
onloadcartnumber()
displaycart()