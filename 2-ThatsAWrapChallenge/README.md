# Challenge 2 - "That's a Wrap"

## Problem
Your task is to write a program which takes, as input, [this](data.txt) short story by Guy de Maupassant. Your program is to word-wrap the story into however many lines are necessary in order to have no line longer than 32 characters.

Your program can assume that the only white-space in the source material are space characters.

Your program should wrap hyphenated words correctly. I.e, wrapping the word self-centered could result in self- remaining at the end of one line, and centered moving to the next line.

Your program will prove its validity by outputting the number of lines which are filled to maximum (lines which are precisely 32 characters long).

The winning solution (using any language) will be one which does not use any built-in word-wrapping algorithms, is clean, as efficient as possible and makes good use of the language's features to achieve the correct result.

## Example

`There are many variations of `

`passages of Lorem Ipsum `

`available, but the majority `

`have suffered alteration in `

`some form, by injected humour, `

`or randomised words which don't `

`look even slightly believable.`

Answer: 1 line contains 32 characters (`or randomised words which don't `)
