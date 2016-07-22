import R from 'ramda';
import * as Ru from 'utils/ramda-utils';

export const required = R.always('Required');
export const notRequired = R.always('');

export const lessThan = R.flip(R.lt);
export const greaterThan = R.flip(R.gt);
export const strLessThan = R.curry(len => R.compose(lessThan(len), Ru.strLen));
export const strGreaterThan = R.curry(len => R.compose(greaterThan(len), Ru.strLen));