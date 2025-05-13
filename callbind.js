let person1 = {
    personName: "ravi",
    greet: function () {
        console.log(`Hello ${this.personName}`);
    }
};

person2 = {
    personName: "hitesh",

}

person1.greet.call({personName:"mukul"});