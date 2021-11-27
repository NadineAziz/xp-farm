# Task : Reverse a Number
## Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

## Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

## Examples:
	123 ->  321
	-456 -> -654
	1000 ->    1

## Scenarios and User Stories

### Scenario 1: As a validator I want to check the type of the input to validate that it is number

#### Scenario 1: Given input false when I validate it then it fails
#### Scenario 2: Given input 'var' when I validate it then it fails
#### Scenario 3: Given input 2 when I validate it then it passes

### Scenario 2: As a reverser I want to reverse the input to get a reversed number

#### Scenario 1: Given input 3 when I reverse it then it gives 3
#### Scenario 2: Given input 23 when I reverse it then it gives 32
#### Scenario 3: Given input 10 when I reverse it then it gives 1
#### Scenario 4: Given input 123 when I reverse it then it gives 321
#### Scenario 5: Given input 500 when I reverse it then it gives 5
#### Scenario 6: Given input -22 when I reverse it then it gives -22
#### Scenario 7: Given input -500 when I reverse it then it gives -5
#### Scenario 8: Given input -432 when I reverse it then it gives -234