const URL = "http://localhost:4000/todos";

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
