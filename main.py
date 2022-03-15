windowSize = 5
readingsList = [0, 0, 0, 0, 0]
valueSum = input.acceleration(Dimension.X)

def on_forever():
    global valueSum
    valueSum = valueSum - readingsList[len(readingsList)]
    readingsList.append(input.acceleration(Dimension.X))
    
basic.forever(on_forever)
