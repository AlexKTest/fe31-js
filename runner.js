const { spawn } = require('child_process')
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
  const node = spawn('node', [filePath])
  let firstInput = true
  const clear = () => {
    if (firstInput) {
      console.clear()
      firstInput = false
    }
  }
  node.stdout.on('data', (data) => {
    clear()
    console.log(data.toString().trim())
  })
  node.stderr.on('data', (data) => {
    const dataText = data.toString().trim()
    if (
      !dataText.includes('Debugger attached') &&
      !dataText.includes('Waiting for the debugger to disconnect')
    ) {
      clear()
      console.log()
      console.log('ERROR:')
      console.log(dataText)
    }
  })
}

runFile()

fs.watch(filePath, () => {
  runFile()
})
