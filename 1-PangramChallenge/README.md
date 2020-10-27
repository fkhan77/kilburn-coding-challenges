# Challenge 1 - Pointless Pangram Problem

## Problem
A pangram (or holoalphabetic) sentence is a sentence which uses each letter of the alphabet at least once. A famous example of a pangram is "The quick brown fox jumps over the lazy dog", but there are many more out there. A perfect pangram is one where these letters of the alphabet are used once and only once.

Your task is to write a program which takes, as input, [this](data.txt) collection of sentences. Your program needs to work through the sentences to determine which ones are pangrams, which ones of those are perfect pangrams, and which ones are neither. Finally, your program will return a numerical checksum of its findings by multiplying the number of non-perfect pangrams by the number of perfect pangrams and finally subtracting the number of non-pangrams.

The winning solution (using any language) will be one which is cleanest and makes best use of the chosen language's features to achieve the correct result.

## Example
`The quick brown fox jumps over the lazy dog`

`Mr. Jock, TV quiz PhD., bags few lynx`

`Jackdaws love my big sphinx of quartz`

`Smoky the Bear secretly started the fires`

`Number of perfect pangrams: 1`

`Number of non-perfect pangrams: 2`

`Number of non-pangrams: 1`

Output: `(1 * 2) - 1 = 1`
