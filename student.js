const express= require('express');
const app=express();
app.use(express.json());

// for creating the election management system

let citizen =[
   {
    name: "prithinga",
    age:20,
    citizenID:12345,
    place:"coimbatore",
    vote: "TVK"
   } ,
   {
    name :"vel",
    age:19,
    citizenID:67890,
    place:"erode" ,
    vote: "TVK"
   },
   {
    name: "Mathii",
    age:20,
    itizenID:67891,
    place:"erode" ,
    vote: "TVK"
   }
]

// get the citizens
app.get('/citizens',(req,res)=>{
    res.json(citizen);
})

// get citizen by id

app.get('/citizens/id',(req,res)=>{
    const id=req.query.id;
    const citizenById = citizen.find(c => c.citizenID == id);
    if(citizenById){
        res.json(citizenById);
    } else {
        res.status(404).send('Citizen not found');
    }
})

// add a citizen
app. post ('/citizens',(req,res)=>{
    const {name,age,citizenID,place,vote}=req.body;
    if(!name || !age || !citizenID || !place || !vote){
        return res.status(400).json({message:"All fields are required"});
    }
    const newCitizen={
        name,
        age,
        citizenID,
        place,
        vote
    }
    citizen.push(newCitizen);
    res.json(newCitizen);
})

app.get('/results', (req, res) => {
        let count =0;
    for (let i = 0; i < citizen.length; i++) {
        if (citizen[i].vote === "TVK") {
            count++;
        }else{
            count --;
        }
    }
    let winnner ;
    if (count > 0){
        winnner = "TVK";
    } else if (count < 0) {
        winnner = "DMK";
    } else {
        winnner = "Tie";
    }res.json({
        Totalcounts: count,
        Winner: winnner
    })
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
})