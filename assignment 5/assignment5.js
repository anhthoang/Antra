

//Test closures
const testClosure = (function(){
    let count = 0;
    return function(){
        count++;
        console.log((count <= 5) ? "Congrats you earn the chance!" : "Sorry you missed the chance");
    }
}
)();


for (let i = 0; i < 6 ; i++){
    testClosure();
}


//Test currying
 
function longerThan(minimumLength){
    return function(item){
        return item.length > minimumLength;
    }
}

const ages = ["A" , "Town", "With", "An", "Ocean", "View"];
console.log(ages.filter(longerThan(2)));