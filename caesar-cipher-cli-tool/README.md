# Welcome to Caesar Cipher CLI!
## The CLI Tool for encode or decode you messages with Caesar cipher.   
&nbsp;
> ### "The die is cast!"  

#### Gaius Julius Caesar — Roman statesman and politician, general, writer.  

Know about [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)!  

### To check this CLI tool you need:  

1. Clone this repository to your machine: 
1.1 To clone write in the terminal:  
git clone https://github.com/besovadevka/besovadevka-basic-nodejs-2021Q2.git  
Then you need to checkout to caesar-cipher-cli-tool branch in the terminal:
git checkout caesar-cipher-cli-tool
1.2 You can also clone only the needed branch, just write in the terminal:  
git clone https://github.com/besovadevka/besovadevka-basic-nodejs-2021Q2.git -b caesar-cipher-cli-tool   
2. Move to besovadevka-basic-nodejs-2021Q2 directory through the terminal:  
cd besovadevka-basic-nodejs-2021Q2    
3. Then move to the caesar-cipher-cli-tool directory:  
cd caesar-cipher-cli-tool  
4. Install all dependencies:  
npm i  
5. Write your own commands to caesar CLI!  
For example: node caesar -s 18 -a encode  

### Remember! You must refer to the program through the name "caesar".  

Notes:
1. Valid options are:  
Required! -s/--shift - Shift value for encode or decode your message. **Number** should be a value  
Required! -a/--action - What to do with your message? **Encode** or **decode** should be a value  
-i/--input - Path to an input file or name of an input file if it is located in caesar-cipher-cli-tool folder  
-o/--output - Path to an output file or name of an output file - it means where an output file will be located after encode/decode and how it will be named  
2. In this CLI Tool there are some prepared input files:  
input.txt  
encoded.txt  
plain.txt  
encodedNegative.txt  
3. If you forget about --input argument you can write you message in the terminal line.
4. If you forget about --output argument you will see encoded or decoded message in the terminal line.
5. Only English letters will be encoded or decoded.  
6. Shift option maybe any digit - fractional/huge - does not matter (if digit will be fractional - shift will be an integer part of a number: -s 4.9 => shift === 4).

&nbsp;
##### For [The Rolling Scopes School](https://rs.school/) course with ♥
##### Author: [Darya Tsimashenkava<@besovadevka>](https://github.com/besovadevka)
