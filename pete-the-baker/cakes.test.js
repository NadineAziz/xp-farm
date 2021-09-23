const {cakes} = require('./cakes');

describe('Pete the Baker',() => {
	it('Should return recipe',() => {
		expect(cakes({flour: 500, sugar: 200, eggs: 1})).toStrictEqual({flour: 500, sugar: 200, eggs: 1})
	})
})