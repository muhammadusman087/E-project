let products =[
{ptitle:"Iphone",pprice:"Rs.2000",pdesc:"Dummy Information",pimg:"assets/images.png"},

{ptitle: "Samsung Galaxy S21", pprice: "Rs.2500", pdesc: "High-end Android smartphone", pimg: "assets/images.png" },

{ptitle: "OnePlus Nord", pprice: "Rs.1800", pdesc: "Mid-range phone with great performance", pimg: "assets/images.png" },


{ptitle: "Realme Narzo 50", pprice: "Rs.1600", pdesc: "Affordable phone with good battery life", pimg: "assets/images.png" },

{ptitle: "Google Pixel 6", pprice: "Rs.3000", pdesc: "Clean Android experience with great camera", pimg: "assets/fast food.avif" },

{ptitle: "Vivo Y21", pprice: "Rs.1700", pdesc: "Stylish phone with decent specs", pimg: "assets/images.png" },

{ptitle: "Oppo A54", pprice: "Rs.1650", pdesc: "Reliable phone for daily use", pimg: "assets/images.png" },

{ptitle: "Infinix Zero 5G", pprice: "Rs.1900", pdesc: "Affordable 5G smartphone", pimg: "assets/biryani.jpg" }


]

























for (var i = 0; i < products.length; i++) {
            document.getElementById("repeat").innerHTML += `
         <div class="col-md-3 mt-3">
                <div class="card">
                    <div class="card-body">
                        <img src="${products[i].pimg}" class="img-fluid" alt="">
                        <h3 class="card-title text-truncate">${products[i].ptitle}</h3>
                        <p class="card-text">${products[i].pprice}</p>
                        <p>price: <del>${products[i].pprice}</del></p>
                        <p class="card-text text-truncate">${products[i].pdesc}</p>
                        <button class="btn btn-outline-success">Buy Now</button>
                    </div>
                </div>

                
            </div>
         `







        }