const app = require('express')();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3002;
const env = process.env.NODE_ENV || "dev";


require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: ' + add);
})


mongoose.connect("mongodb://mongo:27017/docker-example", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((val) => {
    console.log("mongodb connected test")
}).catch((err) => {
    console.log("error conection mongodb", err)
})

app.use(require('cors')());
app.use(bodyParser.json());

app.use('/api', require('./routes/Employees'));

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
})