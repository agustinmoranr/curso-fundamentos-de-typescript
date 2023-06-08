import {subDays, format} from "date-fns"

const today = new Date()
const oneMonthAgo = subDays(today, 30)
const oneMonthAgoFormatted = format(oneMonthAgo, "dd/MM/yyyy")

console.log("today", today)
console.log("oneMonthAgo", oneMonthAgo)
console.log("oneMonthAgoFormatted", oneMonthAgoFormatted)