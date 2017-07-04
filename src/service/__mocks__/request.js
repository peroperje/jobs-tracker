const request = (opt) => new Promise((resolve, reject) => {

  process.nextTick(() => {
    resolve(opt);
  });
});

export default request;
