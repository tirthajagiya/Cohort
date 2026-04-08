const express = require('express')

function block_1_httpMethods()
{
    return new Promise((res) => {
        const app = express();
        app.use(express.json())

        const routes = {
            1:{
                id:1,
                name:"A-B Express",
                direction: "North"
            },
            2:{
                id: 2, 
                name: "C-D Shuttle",
                direction: "East"
            }
        }

        let nextID = 3;

        //all train
        app.get('/routes', (req, res) => {
            res.json(Object.values(routes))
        })

        //train by id
        app.get('/routes/:id', (req, res) => {
            if(!routes[req.params.id]) return res.status(404).json({error: "No train on this id"})
            res.json(routes[req.params.id])
        })

        app.post('routes', (req, res) => {
            //before add of localDB do validation using ZOD
            routes[nextID++] = {id:nextID++, ...req.body}
            res.status(201).json(routes)
        })

        app.put("routes/:id", (req, res) => {
            if(!routes[req.params.id]) return res.status(404).json({error:"Not any Train available in"})
            routes[req.params.id] = {id:Number(req.params.id), ...req.body}
        })
    })
}

async function main(){
    await block_1_httpMethods()

    process.exit(0)
}

main()