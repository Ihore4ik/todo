const URL = "http://localhost:4000/todos/";
const settings = (method = "GET", text = "") => {
  return {
    method: method,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ description: text }),
  };
};

export const getAllApi = async (setState) => {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const dataApi = await response.json();
      setState(dataApi);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getOneApi = async (id) => {
  try {
    const response = await fetch(`${URL}${id}`);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteApi = async (id) => {
  try {
    const response = await fetch(`${URL}${id}`, settings("DELETE"));
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};

export const createApi = async (text) => {
  try {
    const response = await fetch(URL, settings("POST", text));
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateApi = async (id, text) => {
  try {
    const response = await fetch(`${URL}${id}`, settings("PUT", text));
    if (response.ok) {
      return await response.text();
    }
  } catch (error) {
    console.log(error);
  }
};
