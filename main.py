averagedValue = 0
windowSize = 5
readingsList = [0, 0, 0, 0, 0]
valueSum = input.acceleration(Dimension.X)

def on_forever():
    global valueSum, averagedValue
    valueSum = valueSum - readingsList[0]
    readingsList.append(input.acceleration(Dimension.X))
    valueSum = valueSum + readingsList[len(readingsList)]
    averagedValue = valueSum / windowSize
    serial.write_value("x.ax", readingsList[len(readingsList)])
    serial.write_value("x.ax_avg", averagedValue)
    basic.pause(50)
basic.forever(on_forever)
