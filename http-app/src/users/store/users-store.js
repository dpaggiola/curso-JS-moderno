import loadUsersByPage from '../use-cases/load-users-by-page';


const state = {
  curentPage: 0,
  users: [],
};

const loadNextPage = async () => {
  await loadUsersByPage(state.curentPage + 1);
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

  getUser: () => [...state.users],
  getCurrentPage: () => state.curentPage,
};
