import { test } from 'ava';
import R from 'ramda';
import {
	strLen,
	lensById,
	isStringEmpty,
	isNilOrEmpty
} from '../../src/utils/ramda-utils';

test('strLen returns string length', t => {
	const str = "abc";
	const target = strLen(str);
	t.is(target, str.length);
});

test('strLen returns 0 for undefined strings', t => {
	const str = undefined;
	const target = strLen(str);
	t.is(target, 0);
});

test('isStringEmpty returns true for empty strings', t => {
	const str = "";
	const target = isStringEmpty(str);
	t.is(target, true);
});

test('isStringEmpty returns false for non empty strings', t => {
	const str = "abc";
	const target = isStringEmpty(str);
	t.is(target, false);
});

test('isNilOrEmpty returns true for empty strings', t => {
	const str = "";
	const target = isNilOrEmpty(str);
	t.is(target, true);
});

test('isNilOrEmpty returns true for undefined strings', t => {
	const str = undefined;
	const target = isNilOrEmpty(str);
	t.is(target, true);
});

test('isNilOrEmpty returns false for non empty strings', t => {
	const str = "abc";
	const target = isNilOrEmpty(str);
	t.is(target, false);
});

test('lensById properly retrieves by id', t => {
	const idLens = lensById(1);
	const arr = [ { id: 1, name: 'id 1' }, { id: 2, name: 'id 2' } ];
	const target = R.view(idLens, arr);
	t.deepEqual(target, { id: 1, name: 'id 1' });
});