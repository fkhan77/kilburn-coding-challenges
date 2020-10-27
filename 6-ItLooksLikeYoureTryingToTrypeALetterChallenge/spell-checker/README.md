# Challenge 6 - It Looks Like You're Trying to Trype a Letter

## Problem
We're all familiar with red squiggly lines when we make typing mistakes in some of the more popular text editors.
Ever considered what's going on behind the scenes?
Your challenge is to write a spell-checking algorithm which is, at the very least, capable of evaluating arbitrary input words to rapidly determine whether or not the word is misspelled.

For bonus marks, your algorithm will be capable of displaying at what point the word could no longer possibly be correct.
For example, in the word `dictionorie`, you might output information such as: `diction[orie]` to denote that the word was potentially acceptable up until `orie`, as there are 6 possible words which begin with `diction`.

You'll notice the dictionary is almost 173,000 lines long, which means that you'll need to be rather careful how you design your code, the data structures you use, and which technology/language you choose to implement it in.
The winning solution will be one which is able to run quickly, is well optimised, and has the highest quality demonstration.
