let products =[





{ptitle: "Trio of Sweet Temptations", pprice: "Rs.1500", pdesc: "A decadent fusion of chocolate cake, berry sorbet, and meringue.Three flavors, one unforgettable dessert experience..", pimg: "assets/desert.jpg" },

{ptitle: "Velvet Coffee Cloud", pprice: "Rs.1200", pdesc: "Smooth, whipped coffee resting on chilled milk A bold caffeine kick with a creamy finish..", pimg: "assets/desert1.jpg" },

{ptitle: "Garden of Petit Delights", pprice: "Rs.1000", pdesc: "A vibrant medley of mini desserts, macarons, and floral touches . A playful journey of textures, colors, and sweet sensations..", pimg: "assets/desert2.webp" },

{ptitle: "Mini Dessert Medley", pprice: "Rs.1650", pdesc: "A curated collection of rich mousses, custards, and sweet layers.Every spoonful offers a new and delightful flavor surprise..", pimg: "assets/desert4.webp" },

{ptitle: "Caramel Elegance", pprice: "Rs.1900", pdesc: " Silky vanilla flan topped with rich caramel and golden crunch.A timeless dessert with a modern artistic flair.", pimg: "assets/desert3.jpg" },

{ptitle: "Berry Pistachio Bliss", pprice: "Rs.2000", pdesc: ". Creamy scoops of strawberry and vanilla over a rich base.Finished with berry compote and pistachio crumble for a perfect bite. ", pimg: "assets/desert5.jpg" },

{ptitle: "Berry Chocolate Bliss Tart", pprice: "Rs.1800", pdesc: "Decadent chocolate mousse layered on a buttery crustCrowned with berry compote and fresh garden fruits.", pimg: "assets/desert6.webp" },

{ptitle: "Ferrero Fantasy Cheesecake", pprice: "Rs.1900", pdesc: "Creamy layers of chocolate and hazelnut on a buttery biscuit base.Topped with rich ganache and a gourmet truffle for pure indulgence.", pimg: "assets/desert7.webp" }

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