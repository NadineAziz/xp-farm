### Fix String Case

#### Given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
- make as few changes as possible.
- if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

Example:
- `solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.`
- `solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.`
- `solve("coDE") = "code". Upper == lowercase. Change all to lowercase.`

User Story 1:
As a single character case string I want to check the upper and lower case letters so that I change the word accordingly

Scenario 1:
Given a single letter 'c' when I check the upper: lower case ratio then it returns 'c'

Scenario 2:
Given a 1 letter 'T' when I check the upper: lower case ratio then it returns 'T'

User Story 2:
As a mixed case string I want to check the upper and lower case letters so that I change the word accordingly

Scenario 1:
Given a string 'cs' when I check the upper: lower case ratio then it returns 'cs'

Scenario 2:
Given a string 'TO' when I check the upper: lower case ratio then it returns 'TO'

Scenario 3:
Given a string 'leT' when I check the upper: lower case ratio then it returns 'let'

Scenario 4:
Given a string 'LEt' when I check the upper: lower case ratio then it returns 'LET'

Scenario 5:
Given a string 'coDE' when I check the upper: lower case ratio then it returns 'code'