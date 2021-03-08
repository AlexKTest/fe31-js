const { exec } = require('child_process')
const fs = require('fs')
const file = process.argv[2]
const filePath = file
const exist = fs.existsSync(filePath)

if (!exist) {
  console.error(`File "${file}" is not exist`)
  process.exit()
} 

console.clear()

const runFile = () => {
  exec(`node ${filePath}`, (_err, stdout, stderr) => {
    if (stdout || stderr) {
      console.clear()
      console.log(stdout || stderr)
    } else {
      return
    }
  })
}

runFile()

fs.watch(filePath, () => {
  runFile()
})