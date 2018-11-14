import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));

app.listen(3333, () => console.log('Server started at localhost:3333'));