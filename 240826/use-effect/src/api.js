const fetchData = async () => {
  try {
    const res = await fetch(`http://localhost:3000/nations`);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errorData = await res.json();
      console.log(errorData);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export { fetchData };
