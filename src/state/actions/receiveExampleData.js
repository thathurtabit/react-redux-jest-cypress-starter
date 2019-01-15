import { RECEIEVE_EXAMPLE_DATA } from '../constants/stateConstants';

export const receiveExampleData = json => {
  const response = json;

  // Any changes to data can be done here
  const responseFiltered = response.map(item => item);

  return {
    type: RECEIEVE_EXAMPLE_DATA,
    payload: responseFiltered,
  };
};
