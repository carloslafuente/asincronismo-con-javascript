const somethingWillHappend = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!!');
    } else {
      reject('Whooops!!');
    }
  });
};

somethingWillHappend()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const somethingWillHappend2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Hey!! despues de 3 segundos');
      }, 3000);
    } else {
      const error = new Error('Whoopssss!!');
      reject(error);
    }
  });
};

const somethingWillHappend3 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Hey!! despues de 5 segundos');
      }, 5000);
    } else {
      const error = new Error('Whoopssss!!');
      reject(error);
    }
  });
};

somethingWillHappend2()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

Promise.all([
  somethingWillHappend(),
  somethingWillHappend2(),
  somethingWillHappend3(),
])
  .then((response) => {
    console.log(`El array de resultados es:`, response);
  })
  .catch((error) => {
    console.error(error);
  });
