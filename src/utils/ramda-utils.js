import R from 'ramda';

export const lensMatching = pred => toF => entities => {
    const index = R.findIndex(pred, entities);
    return R.map(entity => R.update(index, entity, entities), toF(entities[index]));
};

export const lensById = R.compose(lensMatching, R.propEq('id'));
export const hasSameProp = prop => R.eqProps(prop);
export const hasSameId = hasSameProp('id');
export const rejectById = (id, arr) => R.reject(hasSameId({ id }), arr);
export const isStringEmpty = R.compose(R.isEmpty, R.trim);
export const isNilOrEmpty = R.either(R.isNil, isStringEmpty);