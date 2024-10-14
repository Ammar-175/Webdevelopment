// Inserting data in Mongodb
Use ammar
db.items.insertOne({name:"Samsung S20", price:100, qty:33, rating:3.5, sold:100})
db.items.insertMany([{name:"Lenovo", price:200, qty:44, rating:6.5, sold:90},
                    {name:"Iphone", price:100, qty:55, rating:4.6, sold:70},
                    {name:"Huawei", price:200, qty:44, rating:1.1, sold:90},
                    {name:"Vivo", price:300, qty:66, rating:5.1, sold:100},
                    {name:"Tecno", price:10, qty:22, rating:3.1, sold:20}])