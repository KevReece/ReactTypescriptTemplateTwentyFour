import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const Port = 8081;

app.listen(Port, () => console.log('listening'));
