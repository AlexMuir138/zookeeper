import Alligator from "./models/Alligator.js";
import Bear from "./models/Bear.js"
import Lion from "./models/Lion.js"
import Tiger from "./models/Tiger.js"

import Cage from "./zoo/Cage.js"

let cages = []
let aquarium = []
let zoo = []

let ally = new Alligator("Ally", "Green", "F", 300, 30, "big")
let leo = new Lion("Leo", "Gold", "M", 300, "Yuge")
let tony = new Tiger("Tony", "orange and white","M", 350, "ginormous")
let jonathan = new Bear("Jonathan", "Brown", "M", 500, "big")


aquarium.push(ally)
cages.push(jonathan, leo, tony)
zoo.push(ally, jonathan, leo, tony)

window.alert(leo.speak("humans are tasty"))

window.aquarium = aquarium
window.cages = cages
window.zoo = zoo
