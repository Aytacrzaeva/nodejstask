// const express = require("express")
// const app = express()
// const PORT = 8080
// const cors=require("cors")
// app.use(cors())
// app.use(express.json())
// const users = [
//     {   
//         id:1,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "80.00"
//     },
//     {   
//         id:2,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special",
//         price: "18.00"
//     },
//     {   
//         id:3,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "25.00"
//     },
//     {   
//         id:4,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "40.00"
//     },
//     {   
//         id:5,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "25.00"
//     },
//     {   id:6,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "280.00"
//     },
//     {   
//         id:7,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special Item",
//         price: "18.00"
//     },
//     {   
//         id:8,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "40.00"
//     },
//     {   
//         id:9,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "40.00"
//     },

// ]
// app.get("/", (req, res) => {
//     res.send(users)
// })
// app.post("/", (req, res) => {
//     console.log(req.body)
//     users.push(req.body)
//     res.send(users)
// })

// app.delete("/:id",(req,res)=>{
//     let {id}=req.params
//     let target= users.find(user=> user.id==id)
//     let indexOfTarget=users.indexOf(target)
//     users.splice(indexOfTarget,1)
//     res.send(users)
// })
// app.post("/new", (req,res)=>{
//     users.push({...req.body})
//     res.send(users)
// })
// app.listen(PORT, () => {
//     console.log(`app running on ${PORT}`)
// })




const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const users = [
    {   
        id:1,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Fancy Product",
        price: "80.00"
    },
    {   
        id:2,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Special",
        price: "18.00"
    },
    {   
        id:3,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Sale Item",
        price: "25.00"
    },
    {   
        id:4,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Sale Item",
        price: "40.00"
    },
    {   
        id:5,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Popular Item",
        price: "25.00"
    },
    {   id:6,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Fancy Product",
        price: "280.00"
    },
    {   
        id:7,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Special Item",
        price: "18.00"
    },
    {   
        id:8,
        Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        name: "Popular Item",
        price: "40.00"
    }

]
app.get("/", (req, res) => {
  res.send(users);
});

app.post("/new", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  let target = users.find((user) => user.id == id);
  let indexOfTarget = users.indexOf(target);
  users.splice(indexOfTarget, 1);
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`app running on ${PORT}`);
});























// const users = [
//     {   
//         id:1,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "80.00"
//     },
//     {   
//         id:2,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special",
//         price: "18.00"
//     },
//     {   
//         id:3,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "25.00"
//     },
//     {   
//         id:4,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Sale Item",
//         price: "40.00"
//     },
//     {   
//         id:5,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "25.00"
//     },
//     {   id:6,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Fancy Product",
//         price: "280.00"
//     },
//     {   
//         id:7,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Special Item",
//         price: "18.00"
//     },
//     {   
//         id:8,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "40.00"
//     },
//     {   
//         id:9,
//         Image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
//         name: "Popular Item",
//         price: "40.00"
//     },

// ]