let mark = Number(prompt('Enter your mark: '))

if (mark >= 80 && mark <= 100 ){
    document.write('Your grade is: A+')
} else if (mark >= 70 && mark < 80) {
    document.write('Your grade is: A')
}else if (mark >= 60 && mark < 70) {
    document.write('Your grade is: B')
}else if (mark >= 50 && mark < 60) {
    document.write('Your grade is: C')
}else if (mark >= 40 && mark < 50) {
    document.write('Your grade is: D')
}else if (mark < 40 && mark >= 0) {
    document.write('Your grade is: F')
}else {
    document.write('Invalid Prompt')
}