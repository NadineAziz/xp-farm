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
	
});