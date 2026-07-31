const postData = async (url, data) => {
  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: { "Content-type": "application/json" },
  //   body: data,
  // });

  // if (!res.ok) {
  //   throw new Error(`Request failed with status ${res.status}`);
  // }

  // return await res.json();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "success" });
    }, 1000);
  });
};

export { postData };
