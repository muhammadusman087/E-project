let products =[
{ptitle:"French Fries",pprice:"Rs.2000",pdesc:"Crispy, golden French fries seasoned to perfection – everyone’s favorite! Dip them in ketchup and enjoy a timeless snack anytime, anywhere",pimg:"assets/snacks2.jpg"},

{ptitle: "Crispy Chicken Burger", pprice: "Rs.2500", pdesc: "Juicy, crispy fried chicken fillet layered with lettuce and creamy mayo in a soft sesame bun.A satisfying bite that’s crunchy, flavorful, and totally irresistible!", pimg: "assets/snacks6.webp" },

{ptitle: "Papdi Chaat", pprice: "Rs.1800", pdesc: "A tangy, spicy, and sweet street-style chaat topped with crunchy papdi, chutneys, and sev.A colorful burst of flavors that’s sure to excite your taste", pimg: "assets/snaks7.jpg" },




{ptitle: "Samosa", pprice: "Rs.1600", pdesc: "Crispy, golden samosas filled with spicy goodness – a bite full of flavor! Serve with chutney and win hearts at every gathering", pimg: "assets/snacks.jpg" },

{ptitle: "Chicken Curry", pprice: "Rs.3000", pdesc: "Chicken curry is a flavorful dish made with tender chicken simmered in a rich, spiced gravy.It blends aromatic spices like turmeric, cumin, and coriander with tomatoes and onions", pimg: "assets/lunch4.jpg" },

{ptitle: "Crispy Fried Tilapia", pprice: "Rs.1700", pdesc: "Whole tilapia fish marinated with spices and deep-fried to golden perfection.Crispy on the outside, tender and juicy on the inside.A simple yet flavorful dish loved across coastal", pimg: "assets/lunch5.jpg" },

{ptitle: "chicken dum biryani", pprice: "Rs.1650", pdesc:"Aromatic basmati rice layered with spiced, tender chicken drumsticksSlow-cooked to perfection using traditional dum cookingA royal treat bursting with flavor ", pimg: "assets/lunch2.jpg" },

{ptitle: "Yakhni Pulao", pprice: "Rs.1900", pdesc: "Aromatic basmati rice simmered in rich, flavorful mutton broth (yakhni)Mildly spiced with whole garam masalas and infused with meat juices.A classic, comforting dish known for etc khan with beautifull karahi.", pimg: "assets/lunch.jpg" }


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
                        <select class="form-select-mb-2">
                          <option>small-250g-120</option>
                          <option>regular-1kg-2000</option>
                        <option>big-250g-120</option>
                           </select><br></br>
                        <button class="btn btn-outline-success">order Now</button>
                    </div>
                </div>

                
            </div>
         `







        }