const express = require('express');
const app = new express();

app.use(express.json());

let genres = [{"id": 101, "genre": "thriller"}, {"id": 102, "genre": "romantic"}, {"id": 103, "genre": "comedy"}]

app.get("/api/genres", (req,res) => {
    res.send(genres)
})

app.post("/api/genres", (req,res) => {
    genres.push(req.body);
    res.send(genres)
})

app.put("/api/genres", (req,res) => {
    let id = req.body.id;
    let gname = req.body.genre;
    let newArray=[];
    genres.forEach(ele => {
        if(ele.id == id) { ele.genre = gname}
    })
    res.send(genres);
})

app.delete("/api/genres", (req,res) => {
    let id = req.body.id;
    let newArray=[];
    genres.forEach(ele => {
        if(ele.id != id) { newArray.push(ele) }
    })
    genres = newArray;
    res.send(genres);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`listening at ${PORT}`)})