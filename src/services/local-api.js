import axios from 'axios';

const apiLocal = path =>
  axios
    .get(path)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));

// apiLocal.interceptors.request.use(
//   config => {
//     const configuration = {...config};
//     const {params} = configuration;

//     configuration.params = {
//       ...params,
//       language: 'en-US',
//     };

//     return configuration;
//   },
//   e => Promise.reject(e),
// );

export default apiLocal;
