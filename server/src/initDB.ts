import mongoose from 'mongoose';

const ATLAS_URL: string = "mongodb+srv://claphamgraham:b4S6APRXbrunn8Xz@democluster.qk2fzlj.mongodb.net/?retryWrites=true&w=majority"

//     .connect(process.env.MONGODB_URI || "", {


export const initDb = () => {
  console.log("process.env.MONGODB_URI ===  ", process.env )


  console.log( process.env.DB_NAME)
  console.log( process.env.DB_USER)
  console.log( process.env.DB_PASS)

  console.log("process.env.MONGO_INITDB_DATABASE ===  ", process.env.MONGO_INITDB_DATABASE )
  mongoose
    .connect(process.env.MONGO_URI  || "", {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USER,
      pass: process.env.DB_PASS
    })
    .then(() => {
      console.log('Mongodb connected....');
      
    })
    .catch(err => console.log(err.message));

  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to db...');
  });

  mongoose.connection.on('error', err => {
    console.log(`ERROR::::::: ${err.message}`);
  });

  mongoose.connection.on('disconnected', (e) => {
    console.log('Mongoose connection is disconnected...',e);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close()
    .then(() => {
        console.log(
          'Mongoose connection is disconnected due to app termination...'
        );
        process.exit(0);
      });
  });
};