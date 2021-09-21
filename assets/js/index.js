/* Use the Date object to do the following activities 
What is the year today? */


const now= new Date()
console.log(now.getFullYear())

//What is the month today as a number? 
const month= new Date()
console.log(month.getMonth()+1)

//o What is the date today? 
const date=new Date()
console.log(date.getDate())

//What is the hours now? 
const hours=new Date()
console.log(hours.getHours())

// What is the minutes now? 
const min=new Date()
console.log(min.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970 to now. 
const sec=new Date()
console.log(sec.getTime())

/*Write a script that prompt the user to enter number of years. Calculate the number of seconds a 
person can live. Assume some one lives just hundred years 
o Enter number of yours you live: 100 */
const a=31536000
let b=prompt('enter number of years you live')
console.log(`you lived ${a*b} seconds`)

/*Create a human readable time format using the Date time object 
o YYYY-MM-DD HH:mm 
o DD-MM-YYYY HH:mm 
o DD/MM/YYYY HH:mm 
*/
let format=new Date()
console.log(`${format.getfullyear()}-${format.getmonth()+1}-${format.getDate()}-${format.getHours()}-${format.getMinutes()}`)
console.log(`${format.getDate()}-${format.getMonth()+1}-${format.getfullyear()}-${format.getHours()}-${format.getMinutes()}`)
console.log(`${format.getDate()}/${format.getMonth()+1}/${format.getfullyear()}/${format.getHours()}/${format.getMinutes()}`)

/* Create a human readable time format using the Date time object. The hour and the minute should be 
all the time two digits (7 hours should be 07 and 5 minutes should be 05 ) 
o YYYY-MM-DD HH:mm eg. 2021-09-16 12:05 */

console.log(`${format.getDate()}-0${format.getMonth()+1}-${format.getfullyear()}-${format.getHours()}-${format.getMinutes()}`)