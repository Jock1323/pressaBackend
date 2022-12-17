import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.json({
    message:"ok"
  })
})

app.listen(process.env.PORT || 8080,console.log('hello'))