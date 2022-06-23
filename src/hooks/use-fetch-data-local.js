import {useEffect, useState} from 'react';
import {apiLocal} from '../services';

export const useFetchDataLocal = path => {
  const [state, setState] = useState({loading: true, response: null});

  useEffect(() => {
    apiLocal(path)
      .then(({data}) => setState({response: data, loading: false}))
      .catch(() => setState({loading: false}));
  }, []);

  return state;
};

export default useFetchDataLocal;
