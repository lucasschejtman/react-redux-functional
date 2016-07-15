import R from 'ramda';

export const transformCompleted = R.evolve({ completed: R.not });