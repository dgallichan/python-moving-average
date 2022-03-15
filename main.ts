let list: number[] = []
function sumArray (list: any[]) {
    valueSum = 0
    for (let value of list) {
        valueSum = valueSum + list[list.length]
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
valueSum = input.acceleration(Dimension.X)
basic.forever(function () {
    readingsList.shift()
    readingsList.push(input.acceleration(Dimension.X))
    averagedValue = sumArray(readingsList) / windowSize
    serial.writeValue("x.ax", readingsList[readingsList.length])
    serial.writeValue("x.ax_avg", averagedValue)
    basic.pause(50)
})
