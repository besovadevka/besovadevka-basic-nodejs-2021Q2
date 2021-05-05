# Welcome to Caesar Cipher CLI!
## The CLI Tool for encode or decode you messages with Caesar cipher.   
&nbsp;
> ### "The die is cast!"  

#### Gaius Julius Caesar — Roman statesman and politician, general, writer.  

Know about [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)!  

### To check this CLI tool you need:  

1. Clone or fork this repository  
1.1 To clone write in the terminal:  
git clone https://github.com/besovadevka/besovadevka-basic-nodejs-2021Q2.git  
1.2 You can also clone only the needed branch, just write in the terminal:  
git clone https://github.com/besovadevka/besovadevka-basic-nodejs-2021Q2.git -b caesar-cipher-cli-tool  
1.3 To fork press the fork button on Github.  
2. Move to caesar-cipher-cli-tool folder through the terminal:  
cd caesar-cipher-cli-tool  
3. Install all dependencies:  
npm i  
4. Write your own commands to caesar CLI!  
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
3. If you forget about --input argument you can write you message in the terminal line.
4. If you forget about --output argument you will see encoded or decoded message in the terminal line.
5. Only English letters will be encoded or decoded.  
6. Shift option maybe any digit - fractional/huge - does not matter matter.

&nbsp;
##### For [The Rolling Scopes School](https://rs.school/) course with ♥
##### Author: [Darya Tsimashenkava<@besovadevka>](https://github.com/besovadevka)
