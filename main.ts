let averagedValue = 0
let windowSize = 5
let readingsList = [
0,
0,
0,
0,
0
]
let valueSum = input.acceleration(Dimension.X)
basic.forever(function () {
    valueSum = valueSum - readingsList[0]
    readingsList.push(input.acceleration(Dimension.X))
    valueSum = valueSum + readingsList[readingsList.length]
    averagedValue = valueSum / windowSize
    serial.writeValue("x.ax", readingsList[readingsList.length])
    serial.writeValue("x.ax_avg", averagedValue)
    basic.pause(50)
})
