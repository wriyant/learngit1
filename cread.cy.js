
it('Add a new user', () => {
    var user = {
        "name": 'wwr',
        "job": 'Test Engineer'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        assert.isObject(user, 'value is user')
})
})