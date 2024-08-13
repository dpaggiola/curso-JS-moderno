import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike
 * @returns {Promise<User>} 
 */
export const saveUser = async(userLike) => {

  const user = new User(userLike);

  if (!user.firstName || !user.lastName) {
    throw 'First & last name are required.';
  }

  const userToSave = userModelToLocalhosthost(user);

  if (user.id) {
    throw 'No implementada la actualización';
    return;
  }

  const updatedUser = await createUser(userToSave);
  return updatedUser;

};

/**
 * @param {Like<User>} user
 * @returns {Promise<User>}
 */
const createUser = async(user) => {
  const url = `${import.meta.env.VITE_API_URL}/users`;
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const newUser = await res.json();

  return newUser;
}
