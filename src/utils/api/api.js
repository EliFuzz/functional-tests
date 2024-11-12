export const api = (type, counter) =>
  new Promise((resolve, reject) => {
    const error = { error: "Something went wrong" };

    if (counter !== Number(counter)) {
      return reject(error);
    }

    setTimeout(() => {
      switch (type) {
        case "INCREMENT":
          return resolve({ amount: counter + 1 });
        case "DECREMENT":
          return resolve({ amount: counter - 1 });
        default:
          return reject(error);
      }
    }, 100);
  });
