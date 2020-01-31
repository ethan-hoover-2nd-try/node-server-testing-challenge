const Users = require('./users-model');
const db = require('../data/db-config');

describe('Users Model', function() {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('add()', function() {
        it ('should add a user', async function() {
            await Users.add({ name: 'Johnny' });

            const users = await db('users');
            expect(users).toHaveLength(1);
        });

        it ('should add three different users; ensure Timmy', async function() {
            await Users.add({ name: 'Billy' });
            await Users.add({ name: 'Timmy' });
            await Users.add({ name: 'Jimmy' });

            const threeUsers = await db('users');
            expect(threeUsers).toHaveLength(3);
            expect(threeUsers[1].name).toBe('Timmy');
        });
    });
});


describe('Users Model', function() {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('remove()', function() {
        it ('should remove a user', async function() {
            await Users.add({ name: 'Johnny' });
            await Users.remove(1);

            const users = await db('users');
            expect(users).toHaveLength(0);
        });

        it ('should not remove user that doesnt exist', async function() {
            await Users.add({ name: 'Billy' });
            await Users.add({ name: 'Timmy' });
            await Users.add({ name: 'Jimmy' });
            await Users.remove(5);

            const threeUsers = await db('users');
            expect(threeUsers).toHaveLength(3);
        });
    });

    describe('find()', function() {
        it('should fetch users', async function() {
            await Users.find('users')
        })
    })
});