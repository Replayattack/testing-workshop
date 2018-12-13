import {userToJSON, isPasswordAllowed} from '../auth'

describe('isPasswordAllowed', () => {
  // here's where I'll demo things for you :)
  const allowedPasswords = ['abcdefg123']
  const disallowedPasswords = ['aaaaaaaaaaa']

  allowedPasswords.forEach(password => {
    it(`${password} is allowed`, () => {
      expect(isPasswordAllowed(password)).toBe(true)
    })
  })

  disallowedPasswords.forEach(password => {
    it(`${password} is disallowed`, () => {
      expect(isPasswordAllowed(password)).toBe(false)
    })
  })
})

test('userToJSON excludes secure properties', () => {
  // Here you'll need to create a test user object
  // pass that to the userToJSON function
  // and then assert that the test user object
  // doesn't have any of the properties it's not
  // supposed to.
  // Here's an example of a user object:
  // const user = {
  //   id: 'some-id',
  //   username: 'sarah',
  //   // ↑ above are properties which should
  //   // be present in the returned object
  //
  //   // ↓ below are properties which shouldn't
  //   // be present in the returned object
  //   exp: new Date(),
  //   iat: new Date(),
  //   hash: 'some really long string',
  //   salt: 'some shorter string',
  // }

  // Kent C. Dodds
  // Avoid to test implementation details.
  // Trying to avoid pocking holes in reality just if you can.
  // This approach lets you communicate to who's looking this tests what parts
  // of tests are important or related to each other.

  const safeUser = {
    username: 'bob',
  }
  const unsafeUser = {
    exp: new Date(),
    iat: new Date(),
    hash: 'some really long string',
    salt: 'some shorter string',
  }
  const testUser = {
    ...safeUser,
    ...unsafeUser,
  }
  const result = userToJSON(testUser)
  expect(result).toEqual(safeUser)
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=auth%20util&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
