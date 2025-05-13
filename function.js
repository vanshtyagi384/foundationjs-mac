greet("Hitesh")
greet("Piyush")



let globalVar = "I am a global variable"




function modifyGlobal(){
    globalVar = "i am modified"
    let blockscopedVar = "i am blocked-scoped"
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
context 

