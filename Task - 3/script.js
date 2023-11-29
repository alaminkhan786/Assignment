let ftemp = Number(prompt('Enter fahrenheit: '))

let farcalc = (ftemp - 32) * 5/9
document.write('Celcius is :' + farcalc)


let ctemp = Number(prompt('Enter celcius: '))
let celciusCalc = ctemp * 9/5 + 32
document.write('<br> Farenheit is :' + celciusCalc)