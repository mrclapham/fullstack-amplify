import { test, expect } from 'vitest';

import { sum } from './sum';    
test('sum', () => {
    expect(sum(1, 2)).toBe(3);
});


