import { ADD_CHALLENGE } from '../types/challengesTypes';

const challengesActions = () => {

  // eslint-disable-next-line no-unused-vars
  const addChallenge = function () {
    return ({
      type: { ADD_CHALLENGE },
      payload,
    });
  };

  // eslint-disable-next-line no-unused-vars
  const deleteChallenge = function () {
    return ({
      type: { ADD_CHALLENGE },
      payload,
    });
  };
};

export default { challengesActions };
