let list: number[] = []
function sumArray (list: any[]) {
    valueSum = 0
    for (let value of list) {
        valueSum = valueSum + value
    }
    return valueSum
}
let averagedValue = 0
let valueSum = 0
let windowSize = 5
let readingsList = [
0,
0,
0,
0,
0
]
basic.forever(function () {
    readingsList.shift()
    readingsList.push(input.acceleration(Dimension.X))
    averagedValue = sumArray(readingsList) / windowSize
    serial.writeValue("x.ax", readingsList[readingsList.length - 1])
    serial.writeValue("x.ax_avg", averagedValue)
    basic.pause(50)
})
