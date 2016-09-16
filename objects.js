var person ={
    firstName: "Robert",
    lastName: "White",
    
    phone: "253.1402",
    birthday: "10/27",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
};
function printDetails (p){
    if(typeof p.email!="undefined"){
    console.log(p.email);
    }
    console.log(p.firstName);
    console.log(p.lastName);
    
    console.log(p.phone);
    console.log(p.birthday);
    console.log(p.fullName());

}
printDetails(person);