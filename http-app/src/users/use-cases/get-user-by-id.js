import { localhostUserToModel } from "../mappers/localhost-user.maper";
import { User } from "../models/user";


/**
 * 
 * @param {String|Number} id
 * @returns {Pormise<User>}
 */
export const getUserById = async(id) => {
    
  const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  
  const user = localhostUserToModel(data.data);

  return user;
}