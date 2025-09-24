let products =[
    {ptitle: "Crispy Fries", pprice: "Rs.2500", pdesc: "", pimg: "assets/snacks2.jpg" },

{ptitle: " Chicken Burger", pprice: "Rs.2500", pdesc: "", pimg: "assets/snacks6.webp" },

{ptitle: "Papdi Chaat", pprice: "Rs.1800", pdesc: "", pimg: "assets/beverage.jpg" },




{ptitle: "Samosa", pprice: "Rs.1600", pdesc: "", pimg: "assets/snacks.jpg" },

{ptitle: "Chicken Curry", pprice: "Rs.3000", pdesc: "", pimg: "assets/lunch4.jpg" },

{ptitle: " Fried Tilapia", pprice: "Rs.1700", pdesc: "", pimg: "assets/lunch5.jpg" },

{ptitle: "chicken biryani", pprice: "Rs.1650", pdesc:" ", pimg: "assets/lunch2.jpg" },

{ptitle: "Yakhni Pulao", pprice: "Rs.1900", pdesc: "", pimg: "assets/lunch.jpg" }


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
                       <br></br>
                        <button class="btn btn-outline-success">order Now</button>
                    </div>
                </div>

                
            </div>
         `







        }