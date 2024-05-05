// @ts-check
const fs = require('fs')
const path = require('path')
const { clunk } = require('clunk')

function jsonRead(filePath) {
  try {
    const content = fs.readFileSync(
      filePath,
      'utf-8'
    )
    return JSON.parse(content)
  } catch (error) {
    console.error(error)
  }
}

function jsonWrite(filePath, obj) {
  try {
    fs.writeFileSync(
      filePath,
      JSON.stringify(obj, null, 2)
    )
  } catch (error) {
    console.error(error)
  }
}

function main() {
  const {
    inputs: [targetApp],
  } = clunk()
  console.log(path.resolve(targetApp))
}
main()
