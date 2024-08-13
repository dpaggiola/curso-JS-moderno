


/**
 * @param {String|Number} id
 * @returns {Promise<User>}
 */
export const deleteUserById = async (id) => {
    const url = `${import.meta.env.VITE_API_URL}/users/${id}`;
    const res = await fetch(url, {
      method: "DELETE",
    });
  
    const deleteResult = await res.json();
  
    return true;
  };