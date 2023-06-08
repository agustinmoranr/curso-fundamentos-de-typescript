import _ from "lodash"
const users = [
  {
    username: "Agustin",
    role: "admin"
  },
  {
    username: "Miranda",
    role: "customer"
  },
  {
    username: "Daniela",
    role: "customer"
  },
  {
    username: "Roman",
    role: "seller"
  },
]

const grouppedByRole = _.groupBy(users, "role")

console.log("users",users)
console.log("groupped",grouppedByRole)
