process.stdin.resume() 
process.stdin.setEncoding('utf8') 

var age = console.log("quel est ton age ? (<99 STP)")

process.stdin.on('data', (age) => {

var annee = 2017-age;
   if (isNaN(age)){
        console.log("il fallait entrer un nombre... merci de recharger la page");
    }
    else {
        if (age > 100 || age < 1){
            console.log("Je ne te crois pas !...merci de recharger la page")
        }
        else {
            console.log("tu es né(e) en " + annee);
        }
    }   
       process.exit()
})
