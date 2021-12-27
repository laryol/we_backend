const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "password",
    host: "r1",
    post: 5432,
    database: "postgres"
})

execute()
//client.post("/login", async (req, res) => {
  //  return res.json({message: "Bad email or password"});
//});

async function execute() {
    try {
        await client.connect()
        console.log("Connected!!!")
        client.post("/login", async (req, res) => {
          return res.json({message: "Bad email or password"});
})
        const results = await client.query("select * from users")
        console.table(results.rows)
    } catch (ex) {
        console.log(ex)
    } finally {
        await client.end()
    }
}