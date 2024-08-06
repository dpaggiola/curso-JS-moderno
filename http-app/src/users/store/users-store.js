import { User } from '../models/user';
import {loadUsersByPage} from '../use-cases/load-users-by-page';


const state = {
  curentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  const users = await loadUsersByPage(state.curentPage + 1);
  if (users.length === 0) return;

  state.curentPage += 1;
  state.users = users;
};

const loadPreviousPage = async () => {
  throw new Error("Not implemented yet.");
};

const onUserChanged = async () => {
  throw new Error("Not implemented yet.");
};

const reloadPage = async () => {
  throw new Error("Not implemented yet.");
};

export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users],

  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.curentPage,
};
