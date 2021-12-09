const fs = require('fs')
const lines = fs
console.log(lines)
//   .readFileSync('day06.txt', { encoding: "utf-8" })
let day6 = "4,3,4,5,2,1,1,5,5,3,3,1,5,1,4,2,2,3,1,5,1,4,1,2,3,4,1,4,1,5,2,1,1,3,3,5,1,1,1,1,4,5,1,2,1,2,1,1,1,5,3,3,1,1,1,1,2,4,2,1,2,3,2,5,3,5,3,1,5,4,5,4,4,4,1,1,2,1,3,1,1,4,2,1,2,1,2,5,4,2,4,2,2,4,2,2,5,1,2,1,2,1,4,4,4,3,2,1,2,4,3,5,1,1,3,4,2,3,3,5,3,1,4,1,1,1,1,2,3,2,1,1,5,5,1,5,2,1,4,4,4,3,2,2,1,2,1,5,1,4,4,1,1,4,1,4,2,4,3,1,4,1,4,2,1,5,1,1,1,3,2,4,1,1,4,1,4,3,1,5,3,3,3,4,1,1,3,1,3,4,1,4,5,1,4,1,2,2,1,3,3,5,3,2,5,1,1,5,1,5,1,4,4,3,1,5,5,2,2,4,1,1,2,1,2,1,4,3,5,5,2,3,4,1,4,2,4,4,1,4,1,1,4,2,4,1,2,1,1,1,1,1,1,3,1,3,3,1,1,1,1,3,2,3,5,4,2,4,3,1,5,3,1,1,1,2,1,4,4,5,1,5,1,1,1,2,2,4,1,4,5,2,4,5,2,2,2,5,4,4"
let day6 = "3,4,3,1,2"

function func1(day6) {
  const arr = day6.split(',')
  for (let j = 0; j < 49; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[i] = parseInt(arr[i]) - 1

      } else {
        arr[i] = 6
        arr.push(9)
      }
    }
  }


  console.log(arr.length)
}
func1(day6)

const fishes = fs
  .readFileSync('day06.txt', { encoding: 'utf-8' })//read day??.txt content
const fishes = day6
  .replace(/[\r\n]/g, "") //remove all \r to avoid issues on windows
  .split(",")
  .map(Number)//parse to num

function func2(day6) {
  const queue = Array(9).fill(0)
  for (const fish of fishes) {
    queue[fish]++
  }
  console.log(queue)

  for (let j = 0; j < 256; j++) {
    const currentFishes = queue.shift()
    queue.push(currentFishes)
    queue[6] += currentFishes
  }
  console.log(queue.reduce((a, b) => a + b, 0)) //1629570219571
}
func2(day6)
