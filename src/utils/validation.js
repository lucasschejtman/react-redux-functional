import R from 'ramda';
import * as Ru from 'utils/ramda-utils';

const required = R.always('Required');
const notRequired = R.always('');

export const notEmpty = R.ifElse(Ru.isNilOrEmpty, required, notRequired);