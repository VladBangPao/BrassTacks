# BrassTacks

## Base Strings
Lets talk about something I call "Base Strings"

Base Strings is possibly a new subject of mathematics, in which we speak of non-recurrent strings as a first class object. Its like trying to find the pattern of patterns by generating things that have no pattern.

So what i've come up with so far is the distinction between hard and soft base strings:
1. Hard base strings require that we never display a pattern in a string from one end to the next
2. Soft base strings require that we never display a recursive pattern from the left most charachter of the string.

#### Hard Base Strings
A good example of Hard Base Strings are pallindromes on alphabets. With the added caveat that the last letter in the alphabet is used once and all others are used twice.

The Pallindrome Base Set is when you find all the unique ordinal sets of the alphabet and construct the base pallindrome on the alphabet.

For example:
- abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba
- bacdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcab
- cdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedc

A Compound Pallindrome Base Set is when you string the pallindrome base set together in a non recurring way
- abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba+bcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcb+cdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedc ... etc
...

The problem with a small alphabet like binary is that its Hard Base String set is extremely small
- 0
- 1
- 10
- 01
- 101
- 010

#### Soft Base Strings
A good example of Soft Base Strings are simply strings that never recurse from the left most charachter. Lets use a binary base string as an example.
- 01001000100001000001

#### Why do Base Strings Matter at all?
- For one it would be interesting to find the pattern that explains all non-patterned behavior in a string or anything else.
- Thats about as powerful of a statement as we ever may conjure up in our imagination. But on a side note, we could use properties of Base Strings for other things in case we never achieved such an understanding. Relationships on a subset of base strings could end up proving useful.
