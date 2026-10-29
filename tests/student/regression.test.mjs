import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident: viewer user-4 received claim-B, owned by user-42 ("user-42" starts with "user-4").
test('viewer user-4 does not receive claim-B owned by user-42', () => {
  const claims = [
    { id: 'claim-A', ownerId: 'user-4', status: 'open' },
    { id: 'claim-B', ownerId: 'user-42', status: 'approved' },
  ];

  assert.equal(getClaim(claims, 'user-4', 'claim-B'), null);
  assert.equal(getClaim(claims, 'user-42', 'claim-B'), claims[1]);
});
