let products =[


{ptitle: "chicken dum biryani", pprice: "Rs.1500", pdesc: "", pimg: "assets/lunch2.jpg" },

{ptitle: "Mutton Dum Biryani", pprice: "Rs.1200", pdesc: "", pimg: "assets/lunch1.jpg" },

{ptitle: "Yakhni Pulao", pprice: "Rs.1000", pdesc: "", pimg: "assets/lunch.jpg" },

{ptitle: "Chicken Karahi", pprice: "Rs.1650", pdesc: "", pimg: "assets/lunch3.webp" },

{ptitle: "Chicken Curry", pprice: "Rs.1900", pdesc: "", pimg: "assets/lunch4.jpg" },

{ptitle: " Fried Tilapia", pprice: "Rs.2000", pdesc: "", pimg: "assets/lunch5.jpg" },

{ptitle: " Whole Fish", pprice: "Rs.1800", pdesc: "", pimg: "assets/lunch6.jpg" },

{ptitle: " Fast Food ", pprice: "Rs.1900", pdesc: "", pimg: "assets/lunch7.jpg" }

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