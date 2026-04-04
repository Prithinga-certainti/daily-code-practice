setTimeout(()=>{
    console.log("Hello, World!");
    clearInterval(interval);
},5000);

const interval = setInterval(() => {
    console.log("This is prithinga!");
},1000);

