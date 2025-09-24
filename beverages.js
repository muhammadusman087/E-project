let products =[





{ptitle: "Mint Mojito", pprice: "Rs.1500", pdesc: "", pimg: "assets/beverage.jpg" },

{ptitle: "Tropical Burst", pprice: "Rs.1200", pdesc: "", pimg: "assets/beverage1.webp" },

{ptitle: "Citrus Elixir", pprice: "Rs.1000", pdesc: "", pimg: "assets/beverage2.jpg" },

{ptitle: "Sunset Sizzle", pprice: "Rs.1650", pdesc: "", pimg: "assets/beverage3.webp" },

{ptitle: "Berry Blush", pprice: "Rs.1900", pdesc: "", pimg: "assets/beverage4.jpg" },

{ptitle: "Orange Chill", pprice: "Rs.2000", pdesc: " ", pimg: "assets/beverage5.webp" },

{ptitle: ". Berry Fizz", pprice: "Rs.1800", pdesc: "", pimg: "assets/beverage6.webp" },

{ptitle: "Blue Lagoon", pprice: "Rs.1900", pdesc: "", pimg: "assets/beverage7.jpg" }

]


for (var i = 0; i < products.length; i++) {
            document.getElementById("repeat").innerHTML += `
         <div class="col-md-4 col-lg-3 mt-3">
                <div class="card">
                    <div class="card-body">
                        <img src="${products[i].pimg}" class="img-fluid" alt="">
                        <h3 class="card-title ">${products[i].ptitle}</h3>
                        <p class="card-text ">${products[i].pdesc}</p>
                         <p>price: <del>${products[i].pprice}</del></p>
                        <p class="card-text">${products[i].pprice}</p>
                        <button class="btn btn-outline-success">order Now</button>
                    </div>
                </div>

                
            </div>
         `







        }