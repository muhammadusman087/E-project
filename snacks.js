let products =[





{ptitle: "Samosa", pprice: "Rs.1500", pdesc: "", pimg: "assets/snacks.jpg" },

{ptitle: "Pakora", pprice: "Rs.1200", pdesc: "", pimg: "assets/snacks1.jpg" },

{ptitle: "French Fries", pprice: "Rs.1000", pdesc: "", pimg: "assets/snacks2.jpg" },

{ptitle: " Club Sandwich", pprice: "Rs.1622.", pdesc:"" , pimg: "assets/snacks3.jpg" },

{ptitle: "Chicken Shawarma ", pprice: "Rs.1900", pdesc: "", pimg: "assets/snacks4.webp" },

{ptitle: " Chicken Burger", pprice: "Rs.2000", pdesc:"", pimg: "assets/snacks6.webp" },
{ptitle: "Papdi Chaat", pprice: "Rs.1800", pdesc: "", pimg: "assets/snaks7.jpg" },

{ptitle: "Dahi Puri ", pprice: "Rs.1900", pdesc: "", pimg: "assets/snacks9.webp" }

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