const fs = require('fs')
const lines = fs
  .readFileSync('day10.txt', { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")
  .filter(Boolean)

function func1(day10) {
  const stack = []
  const closingChar = {
    "(": ')',
    "{": '}',
    "[": ']',
    "<": '>'
  }
  const point = {
    " )": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
  }
  const found = []
  for (const line of lines) {
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      if (/[({\[<]/.test(element)) {
        stack.push(closingChar[element])
      } else {
        const expected = stack.pop();
        if (expected !== element) {
          found.push(element)
        }
      }
    }
  }
  console.log(found)
}
func1(lines)


function func2(day9) {

}
func2(day9)
