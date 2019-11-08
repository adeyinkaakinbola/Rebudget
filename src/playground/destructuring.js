//OBJECT DESTRUCTING
const person = {
    name: 'Venice',
    age:25,
    location:{
        city:'Miami',
        temp:95
    }
};
const { name }= person;
// console.log(name);
//ARRAY DESTRUCTURING
const address=['1000 Juniper St','Berlin','Germany','191AT'];
// console.log(address[1]);
const [street,myspot,place,code]=address;
console.log(myspot);