let adjective = document.getElementById(`adjectiveH2`);
let animal = document.getElementById(`animalH2`);
let generateBtn = document.getElementById(`generateBtn`);
let meow1 = document.getElementById(`meow-1`);
let meow2 = document.getElementById(`meow-2`);
let meow3 = document.getElementById(`meow-3`);
let meowCount = 0;

let animalArr = ["Dog","Cow","Cat","Horse","Donkey","Tiger","Lion","Panther","Leopard","Cheetah","Bear","Elephant","Turtle","Tortoise","Crocodile","Rabbit","Porcupine","Hare","Hen","Pigeon","Albatross","Crow","Fish","Dolphin","Frog","Whale","Alligator","Eagle","Flying squirrel","Ostrich","Fox","Goat","Jackal","Emu","Armadillo","Eel","Goose","Wolf","Gorilla","Chimpanzee","Monkey","Beaver","Orangutan","Antelope","Bat","Badger","Giraffe","Hermit Crab","Panda","Hamster","Cobra","Hammerhead shark","Camel","Hawk","Deer","Chameleon","Hippopotamus","Jaguar","Lizard","Koala","Kangaroo","Iguana","Llama","Chinchillas","Jellyfish","Rhinoceros","Hedgehog","Zebra","Possum","Wombat","Bison","Bull","Sheep","Meerkat","Mouse","Otter","Sloth","Owl","Vulture","Flamingo","Racoon","Mole","Duck","Swan","Lynx","Elk","Boar","Lemur","Mule","Baboon","Mammoth","Rat","Snake","Peacock"];
let adjectiveArr = ["Adorable","Adventurous","Aggressive","Agreeable","Alert","Amused","Angry","Annoyed","Anxious","Arrogant","Ashamed","Bewildered","Blushing","Bored","Brainy","Brave","Busy","Calm","Careful","Cautious","Charming","Cheerful","Clever","Clumsy","Combative","Comfortable","Concerned","Confused","Courageous","Crazy","Creepy","Cruel","Curious","Dangerous","Defeated","Defiant","Delightful","Determined","Disgusted","Dizzy","Doubtful","Eager","Elated","Elegant","Embarrassed","Enchanting","Encouraging","Energetic","Enthusiastic","Envious","Evil","Excited","Famous","Fancy","Fierce","Foolish","Frantic","Friendly","Frightened","Gentle","Grotesque","Grumpy","Happy","Helpful","Hilarious","Hungry","Important","Inquisitive","Itchy","Jealous","Jittery","Jolly","Joyous","Kind","Lazy","Lively","Mushy","Mysterious","Nasty","Naughty","Nervous","Nice","Nutty","Obnoxious","Odd","Old-Fashioned","Outraged","Panicky","Pleasant","Poised","Powerful","Prickly","Proud","Puzzled","Quaint","Relieved","Repulsive","Scary","Selfish","Shy","Silly","Sleepy","Smiling","Sore","Strange","Successful","Super","Tame","Tense","Tired","Tough","Troubled","Uninterested","Unusual","Upset","Uptight","Victorious","Vivacious","Weary","Wicked","Wild","Witty","Worried","Zany","Zealous"];

generateBtn.addEventListener(`click`, () => {
    if (meowCount === 0) {
        meow1.play();
        meowCount++;
    } else if (meowCount === 1) {
        meow2.play();
        meowCount++;
    } else {
        meow3.play();
        meowCount = 0;
    }
    // select random adjective
    let adjectiveIndex = Math.floor(Math.random() * adjectiveArr.length);
    console.log(adjectiveIndex)
    let selectedAdjective = adjectiveArr[adjectiveIndex]
    console.log(selectedAdjective)
    adjective.textContent = selectedAdjective

    // select random animal
    let animalIndex = Math.floor(Math.random() * animalArr.length);
    console.log(animalIndex)
    let selectedAnimal = animalArr[animalIndex]
    console.log(selectedAnimal)
    animal.textContent = selectedAnimal
})

console.log(`linked`)

