show dbs 
use ammar
show collections

db.items.find()
db.items.updateOne({name : "Vivo"} , {$set : {price : 5}})
db.items.find()
db.items.updateMany({price : 200} , {$set : {name : "ok"}})
