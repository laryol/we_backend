const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "password",
    host: "r1",
    post: 5432,
    database: "postgres"
})

client.connect()
    .then(() => console.log("Connected successfully"))
 //   .then(() => client.query("insert into users values ($1,$2)",['1','a']))
    .then(() => client.query("select * from users"))
    .then(results => console.table(results.rows))
    .catch(e => console.log(e))
    .finally(() => client.end())