input.onButtonPressed(Button.A,
function() {
input.runningTime()
})
   let start = 0
input.onButtonPressed(Button.B,
function() {
   let elapsed =
input.runningTime () -
start 


basic.showNumber(Math.idiv(elapsed,
1000))
})
