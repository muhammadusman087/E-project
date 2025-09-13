let products =[





{ptitle: "Samosa", pprice: "Rs.1500", pdesc: "Crispy, golden samosas filled with spicy goodness – a bite full of flavor! Serve with chutney and win hearts at every gathering..", pimg: "assets/snacks.jpg" },

{ptitle: "Pakora", pprice: "Rs.1200", pdesc: "Crispy and golden pakoras, bursting with spicy flavors in every bite A perfect tea-time treat served best with mint or tamarind  and with chuteny and etc.", pimg: "assets/snacks1.jpg" },

{ptitle: "French Fries", pprice: "Rs.1000", pdesc: "Crispy, golden French fries seasoned to perfection – everyone’s favorite! Dip them in ketchup and enjoy a timeless snack anytime, anywhere..", pimg: "assets/snacks2.jpg" },

{ptitle: "Veg Club Sandwich", pprice: "Rs.1622.", pdesc:"Layered with fresh veggies, cheese, and sauces – a crunchy, healthy delight!Perfect for lunch boxes, picnics, and etc" , pimg: "assets/snacks3.jpg" },

{ptitle: "Chicken Shawarma Wrap", pprice: "Rs.1900", pdesc: "Tender grilled chicken wrapped in soft flatbread with fresh veggies and creamy sauce.A mouthwatering on-the-go snack bursting with bold Mediterranean flavors!", pimg: "assets/snacks4.webp" },

{ptitle: "Crispy Chicken Burger", pprice: "Rs.2000", pdesc:"Juicy, crispy fried chicken fillet layered with lettuce and creamy mayo in a soft sesame bun.A satisfying bite that’s crunchy, flavorful, and totally irresistible!", pimg: "assets/snacks6.webp" },
{ptitle: "Papdi Chaat", pprice: "Rs.1800", pdesc: "A tangy, spicy, and sweet street-style chaat topped with crunchy papdi, chutneys, and sev.A colorful burst of flavors that’s sure to excite your taste.", pimg: "assets/snaks7.jpg" },

{ptitle: "Dahi Puri ", pprice: "Rs.1900", pdesc: "Crisp puris filled with spiced potatoes, tangy chutneys, and chilled yogurt, topped with sev.A perfect balance of sweet, spicy, and creamy – truly irresistible in every bite!will ne happenss", pimg: "assets/snacks9.webp" }

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