import express from 'express';
//import listEndpoints from 'express-list-endpoints';
import blogsRoute from './services/blogs/index.js';
import listEndpoints from 'express-list-endpoints';

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use('/blogs', blogsRoute);

app.listen(PORT, () => console.log(`SERVER STARTED at ${PORT}`));
//console.table(listEndpoints(app));
app.on('error', (err) => console.log(`SERVER NOT RUNNING  ${err}`));
