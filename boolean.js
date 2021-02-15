let res1 = (true && false) || (false && true) // false
let res2 = 10 > 11 && 11 > 10 // false
let res3 = (true || false) && true // true
let res4 = (!true && !false) || (!false && !false) // true
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'// false
let res6 = (!(20 >= 20) && 7 === 7) || true // true
let res7 = '1' === 1 && '2' == 2 && '3' === 3 // false
let res8 = !res7 // true
let res9 = !res8 // false

let res = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
//            false    ||       true     ||      false       ||        false
//           true                ||      true      ||      true 

console.log(res)

