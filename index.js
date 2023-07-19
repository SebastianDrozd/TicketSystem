const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3000


//middleware
app.use(express.json())



app.use("/",express.static(path.join(__dirname,"public")))

app.use('/',require('./routes/root'))


app.all("*",(req,res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if(req.accepts('json')){
        res.json({message:'404 not found'})
    }
    else{
        res.type('txt').send('404 not found')
    }
})





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})