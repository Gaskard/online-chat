import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import route from "./route";

const app = express();


app.use(cors({origin: '*'}));
app.use(route)

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

server.listen(5000, () => {
    console.log('Server start')
})