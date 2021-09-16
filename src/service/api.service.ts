const API_URL = "http://localhost:3000/server/user.json";

export const getUsers = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => ({
      data: data.users,
      error: null,
    }))
    .catch((error) => {
      return {
        data: null,
        error: error.message || "Error occurred on fetching User",
      };
    });
};

export const getAsyncUsers = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return {
      data: data.users,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
};
