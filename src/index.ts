import express from 'express';
import router from './router/index';

const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send('hello world');
});

app.use('/api',router);

app.listen(8000, () => {
    console.log('server is listening 8000');
});