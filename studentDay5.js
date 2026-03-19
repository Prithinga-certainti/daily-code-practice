a={
    name: 'prithii',
    year:3,
    age:21,
    dep:'csbs',

coding : function(){
    console.log('Student can code');
},
walking : function(){
    console.log('Student can walk');
},
studying : function(){  
    console.log('Student can study');
}
}

console.log(a.name);
console.log(a.age);
a.walking();
a.studying();


// pass by value
let x = 10;
let y=x;
console.log(x); 
console.log(y);

// pass by reference 
let c1;
c1={
    name: 'prithii',
    year:3,
    age:21,
    dep:'csbs',
}
console.log(c1.name);
console.log(c1.age);
let c2=c1;
console.log(c2.name);
console.log(c2.age);
c2.name='prithinga';
console.log(c1.name); 
console.log(c2.name);




