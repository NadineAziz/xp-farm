const { inviteMoreWoman } = require("./inviteMoreWoman");

describe('Authur Party' , () => {
	describe('Senario 1: As King Arthur has a party He wants to invite no one So that so he could eat all the sushi',() => {
		it('User Story 1:Given that there is a party When king author invites no one Then it should fail because he will have no date',()=>{
			expect(inviteMoreWoman([])).toBe(false);
		});
	});

	describe('Senario 2: As King Arthur has a party He wants to invite only men So that so he could eat all the sushi and they don\'t dare', () => {
		it('User Story 1: Given that there is a party When king author invites one man Then it should fail because he will have no date',() => {
			expect(inviteMoreWoman([1])).toBe(false);
		});

		it('User Story 2: Given that there is a party When king author invites 3 men Then it should fail because he will have no date',() => {
			expect(inviteMoreWoman([1,1,1])).toBe(false);
		});
	});

	describe('Senario 3: As King Arthur has a party He wants to invite more men than women So that so he could have the chance for a date', () => {
		it('User Story 1: Given that there is a party When king author invites 2 men and 1 woman Then it should fail because she might not like him (he doesn\'t share sushi)',() => {
			expect(inviteMoreWoman([1,1,-1])).toBe(false);
		});

		it('User Story 1: Given that there is a party When king author invites 5 men and 3 woman Then it should fail because Authur is eating sushi and getting all the women)',() => {
			expect(inviteMoreWoman([1,1,1,1,1,-1,-1,-1])).toBe(false);
		});
	});

	describe('Senario 4:As King Arthur has a party He wants to invite equal amount of men and women So that so he could have the chance for a date', () => {
		it('User Story 1: Given that there is a party When king author invites 2 men and 2 women Then it should pass because one might like him (maybe when he shares his sushi)',() => {
			expect(inviteMoreWoman([1,1,-1,-1])).toBe(true);
		});
	});
	
});