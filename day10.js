const fs = require('fs')
const lines = fs
  .readFileSync('day10.txt', { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")
  .filter(Boolean)

function median(array) {
  const internalArray = [...array]
  internalArray.sort((a, b) => a - b)
  if (internalArray.length % 2 === 0) {
    return (
      (internalArray[internalArray.length / 2 - 1] +
        internalArray[internalArray.length / 2]) / 2
    )
  } else {
    return internalArray[Math.floor(internalArray.length / 2)]
  }
}

function func1() {

  const closingChar = {
    "(": ')',
    "{": '}',
    "[": ']',
    "<": '>'
  }
  const point = {
    ")": 3,
    "]": 57,
    "}": 1197,
    ">": 25137
  }
  const found = {
    ")": 0,
    "]": 0,
    "}": 0,
    ">": 0
  }
  for (const line of lines) {
    const stack = []
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      if (/[({\[<]/.test(element)) {
        stack.push(closingChar[element])
      } else {
        const expected = stack.pop();
        if (expected !== element) {
          // found.push(element)for first test to found [ '}', ')', ']', ')', '>' ]
          found[element]++
        }
      }
    }
  }

  const score = Object.keys(found)
    .map(key => point[key] * found[key]).reduce((a, b) => a + b, 0)
  console.log(score)
}
func1(lines)


function func2() {

  const closingChar = {
    "(": ')',
    "{": '}',
    "[": ']',
    "<": '>'
  }
  const point = {
    ")": 1,
    "]": 2,
    "}": 3,
    ">": 4
  }
  let scores = []
  for (const line of lines) {
    const stack = []
    let corrupted = false
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      if (/[({\[<]/.test(element)) {
        stack.push(closingChar[element])
      } else {
        const expected = stack.pop();
        if (expected !== element) {
          corrupted = true
          break
        }
      }
    }
    if (!corrupted && stack.length > 0) {
      const closingChar = stack.reverse().join("")
      // console.log(closingChar)
      let score = 0
      for (let i = 0; i < closingChar.length; i++) {
        const element = closingChar[i];

        score *= 5;
        score += point[element]
      }
      // console.log(score)
      scores.push(score)
    }
  }

  console.log(median(scores))//3354640192

}
func2(lines)
