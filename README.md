# jwt-utility

Fastest json web token utility

## Use:  

node src/index.js <sign> <secret> <name>

example:
$ node src/index.js sign secret SampleUser
output: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYW1wbGVVc2VyIiwiaWF0IjoxNjAwNDc1NDE1fQ.pnliIVZxWBeguZCctTSbKYCjC8i-ITdMWHUVEo0j41E  

$ node src/index.js verify secret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJTYW1wbGVVc2VyIiwiaWF0IjoxNjAwNDc1NDE1fQ.pnliIVZxWBeguZCctTSbKYCjC8i-ITdMWHUVEo0j41E

output: 
{ sub: 'SampleUser', iat: 1600475415 }