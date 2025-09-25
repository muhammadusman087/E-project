let products = [

    { ptitle: "Trio Temptations", pprice: "Rs.1500", pdesc: "", pimg: "assets/desert.jpg" },

    { ptitle: " Coffee Cloud", pprice: "Rs.1200", pdesc: "", pimg: "assets/desert1.jpg" },

    { ptitle: " Petit Delights", pprice: "Rs.1000", pdesc: "", pimg: "assets/desert2.webp" },

    { ptitle: " Dessert Medley", pprice: "Rs.1650", pdesc: "", pimg: "assets/desert4.webp" },

    { ptitle: "Caramel Elegance", pprice: "Rs.1900", pdesc: " ", pimg: "assets/desert3.jpg" },

    { ptitle: "Berry Pistachio ", pprice: "Rs.2000", pdesc: " ", pimg: "assets/desert5.jpg" },

    { ptitle: "Chocolate Bliss", pprice: "Rs.1800", pdesc: "", pimg: "assets/desert6.webp" },

    { ptitle: " Fantasy Cheesecake", pprice: "Rs.1900", pdesc: "", pimg: "assets/desert7.webp" }

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