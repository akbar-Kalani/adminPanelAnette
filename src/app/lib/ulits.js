// db.js
import mongoose from 'mongoose';



export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO)
    console.log("Connected to the database");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error connecting to the database:', error);

  

    throw new Error;
  }
};



/* import mongoose from 'mongoose';

export const connectToDB = async () => {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect('mongodb+srv://akbarmweb:akbarmweb@cluster0.3hhl7yp.mongodb.net/dashboard?retryWrites=true&w=majority');
     console.log(db, "Hello I have a new problem")
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error(error, 'Hello Kalani'); // Use console.error to log errors
    throw error; // Corrected syntax for throwing an error
  }
};
           */


 // db.js
// db.js
/* import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGO)
    console.log("Connected to the database")
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};
 */