function receivesAFunction(greeting){
    return greeting('hi');
}

function greeting(hi = "howdy"){
    console.log(`${hi}`); 
}

function hello(){
    return "hello";
}
function returnsANamedFunction(){
    return hello; 
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hi there!"); 
    }
}