
import fs from 'fs'

demoAsync()

function demoAsync() {
    fs.readFile('time-stamp.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')
        const miliSeconds = contents.split('\r\n')
        console.log(miliSeconds)
        var seconds = miliSeconds.map((milisec) => (+milisec / 1000))
        console.log(seconds)
    })
    console.log('after calling readFile:')
}