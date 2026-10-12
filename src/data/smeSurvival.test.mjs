import { expect, test } from 'bun:test';
import { readinessScore, readinessBand } from './smeSurvival.ts';

test('best answers score 100, worst score 0', () => {
  expect(readinessScore([0, 0, 0, 0, 0, 0, 0, 0])).toBe(100);
  expect(readinessScore([3, 3, 3, 3, 3, 3, 3, 3])).toBe(0);
});
test('bands at 75 and 45', () => {
  expect(readinessBand(75).label).toBe('Ahead of the curve');
  expect(readinessBand(74).label).toBe('Exposed in places');
  expect(readinessBand(45).label).toBe('Exposed in places');
  expect(readinessBand(44).label).toBe('At risk');
});
test('rejects incomplete answers', () => {
  expect(() => readinessScore([0, 1])).toThrow();
});
