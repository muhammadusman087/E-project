let products =[





{ptitle: "Mint Mojito", pprice: "Rs.1500", pdesc: "A refreshing blend of fresh mint, lime, and soda.Cool, crisp, and perfect for any moment.", pimg: "assets/beverage.jpg" },

{ptitle: "Tropical Burst", pprice: "Rs.1200", pdesc: "A vibrant mix of citrus, berries, and mint over crushed ice.Chilled, zesty, and made for good vibes only..", pimg: "assets/beverage1.webp" },

{ptitle: "Citrus Elixir", pprice: "Rs.1000", pdesc: "A sparkling blend of lime, lemon, and soda with a twist of zest.Light, crisp, and made to refresh your soul..", pimg: "assets/beverage2.jpg" },

{ptitle: "Sunset Sizzle", pprice: "Rs.1650", pdesc: "A vibrant blend of orange juice, grenadine, and a tropical twist.Sweet, citrusy, and as stunning as a summer sunset..", pimg: "assets/beverage3.webp" },

{ptitle: "Berry Blush", pprice: "Rs.1900", pdesc: "A sweet and tangy blend of wild berries and citrus with a sugared rim.Bold in flavor, beautiful in color — made to impress..", pimg: "assets/beverage4.jpg" },

{ptitle: "Orange Chill", pprice: "Rs.2000", pdesc: "Fresh orange juice with crushed ice and a splash of citrus fizz.Cool, energizing, and sunshine in every sip.. ", pimg: "assets/beverage5.webp" },

{ptitle: ". Berry Fizz", pprice: "Rs.1800", pdesc: "Frozen berries blended into a tangy, slushy delight.Cool, fruity, and made to refresh every sip..", pimg: "assets/beverage6.webp" },

{ptitle: "Blue Lagoon", pprice: "Rs.1900", pdesc: "Dive into the refreshing waves of this vibrant blue cocktail.A perfect blend of citrus and tropical flavors..", pimg: "assets/beverage7.jpg" }

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