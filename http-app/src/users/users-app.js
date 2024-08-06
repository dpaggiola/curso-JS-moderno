import usersStore from "./store/users-store";
import {renderTable} from "./presentation/render-table/render-table";


export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    renderTable(element);
}