const {highestScoringWord} = require('./highest-scoring-word');

describe('Highest Scoring Word', () => {
    describe('Basic functionality', () => {
        it('Should take a letter and return same letter',()=>{
            expect(highestScoringWord('a')).toBe('a');
        })
    })
})