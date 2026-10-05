const CART_KEY="dods_cart_v2",WISH_KEY="dods_wish_v2";
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||"[]")}catch(e){return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount()}
function updateCartCount(){let n=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll("#cart-count").forEach(x=>x.textContent="("+n+")")}
function addToCart(item,go){let c=getCart(),old=c.find(x=>x.id===item.id);if(old)old.qty+=item.qty||1;else c.push({...item,qty:item.qty||1});saveCart(c);if(go)location.href="cart.html";else alert("Demo: "+item.name+" added to cart.")}
function toggleWish(item){let w=JSON.parse(localStorage.getItem(WISH_KEY)||"[]"),has=w.some(x=>x.id===item.id);w=has?w.filter(x=>x.id!==item.id):[...w,item];localStorage.setItem(WISH_KEY,JSON.stringify(w));alert(has?item.name+" removed from wishlist.":item.name+" added to wishlist.")}
document.addEventListener("DOMContentLoaded",updateCartCount);