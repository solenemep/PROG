# Table de vérité de l'opérateur XOR

XOR (exclusive OR) is a boolean operator, like && and ||, but with the following logic: 
It is successful if the expression on either side is true (like ||), but not if both sides are true (like !( x && y )).

Soit l'un, soit l'autre, mais pas les deux.

| a | b | a XOR b |
|---|---|---------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |