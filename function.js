function greet(name){
    console.log(`Hello ${name}`);
    
}

//greet("Hitesh")
//greet("Piyush")



let globalVar = "I am a global variable"




function modifyGlobal(){
    globalVar = "i am modified"
    let blockScopedVar = "i am blocked-scoped"
    console.log(blockScopedVar);
    
}



modifyGlobal()


let config =  function(){
    let settings = {
        theme:"dark"
    }
    return settings
}() //if eee

let person1 ={
    name:"ravi",
    greet : function(){
        console.log(`Hello ${this.name}`);
    }
}


let person2 = {
    name: "hitesh"

}

const bindGreet = person1.greet.bind(person2);
console.log(bindGreet());
