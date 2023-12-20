import { User } from "./models";
import { connectToDB } from "./ulits";

export const fetchUsers = async () => {
  try {
    connectToDB(); // Wait for the database connection to be established
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch users');
  }
};



