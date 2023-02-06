import express, { Application } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';

import routes from 'src/routes';

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const app: Application = express();

    app.use(bodyParser.json({ limit: '150mb' }));
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', routes);

    await mongoose.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
    } as ConnectOptions);

    app.listen(PORT, () => {
      console.log('Server has been started...');
    });
  } catch (error) {
    console.log('error', error);
  }
}

start();
