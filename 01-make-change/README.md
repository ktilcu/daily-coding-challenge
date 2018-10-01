# Make Change

Build a function `change` that indicates the optimal way to return coin change given the change amount and the available coin values.

## Input
`amount` - The amount of change to make in cents. e.g. `83`
`coins` - The available coin values as a list e.g. `[25,10,5,1]`

## Output
The coin count for each value of coin.

## Example

change(83, [25,10,5,1])  // [3, 0, 1, 3]

## Extra credits
* coin list might not be sorted
* prefer over-change to short-changing (if change `amount` is `83` but you have
  no pennies then return 85)
