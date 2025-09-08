let products =[





{ptitle: "chicken dum biryani", pprice: "Rs.1500", pdesc: "Aromatic basmati rice layered with spiced, tender chicken drumsticksSlow-cooked to perfection using traditional dum cookingA royal treat bursting with flavor in every bite.", pimg: "assets/lunch2.jpg" },

{ptitle: "Mutton Dum Biryani", pprice: "Rs.1200", pdesc: "Tender pieces of mutton cooked to perfection with aromatic spices.Layered with long-grain basmati rice and slow-cooked in traditional dum style.A rich, flavorful biryani etc.", pimg: "assets/lunch1.jpg" },

{ptitle: "Yakhni Pulao", pprice: "Rs.1000", pdesc: "Aromatic basmati rice simmered in rich, flavorful mutton broth (yakhni)Mildly spiced with whole garam masalas and infused with meat juices.A classic, comforting dish known for etc khan with beautifull karahi.", pimg: "assets/lunch.jpg" },

{ptitle: "Chicken Karahi with Naan", pprice: "Rs.1650", pdesc: "A spicy and aromatic chicken curry cooked in a traditional wok (karahi).Rich tomato-based gravy infused with ginger, garlic, and green chilies.Rich tomato-based gravy .", pimg: "assets/lunch3.webp" },

{ptitle: "Chicken Curry", pprice: "Rs.1900", pdesc: "A classic dish featuring tender chicken simmered in a rich, spiced gravy.Flavored with traditional Indian herbs, tomatoes, and onions.A comforting and flavorful curry perfect with etc", pimg: "assets/lunch4.jpg" },

{ptitle: "Crispy Fried Tilapia", pprice: "Rs.2000", pdesc: "Whole tilapia fish marinated with spices and deep-fried to golden perfection.Crispy on the outside, tender and juicy on the inside.A simple yet flavorful dish loved across coastal.", pimg: "assets/lunch5.jpg" },

{ptitle: "Grilled Whole Fish", pprice: "Rs.1800", pdesc: "Whole fish marinated in zesty spices and grilled to smoky perfection.Served wit.", pimg: "assets/lunch6.jpg" },

{ptitle: "Assorted Fast Food ", pprice: "Rs.1900", pdesc: "A tempting mix of burgers, fries, pizzas, donuts, cookies, and more.Perfect for snack lovers craving sweet, salty, and savory treats.The ultimate indulgent platter for parties", pimg: "assets/lunch7.jpg" }

]


for (var i = 0; i < products.length; i++) {
            document.getElementById("repeat").innerHTML += `
         <div class="col-md-3 mt-3">
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