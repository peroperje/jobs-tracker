const request = (opt) => new Promise((resolve, reject) => {

  process.nextTick(() => {
    resolve({data: opt});
  });
});

export default request;
