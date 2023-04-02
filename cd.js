const rest1 = {
  nameOfRestaurant: 'Capri',
  numOfGuests: 0
}

const rest2 = {
  nameOfRestaurant: 'Pizziana',
  owner: 'Giovanni Rossi'
}

// rest1.numOfGuests ??= 10
// rest2.numOfGuests ??= 10

// console.log(rest1)
// console.log(rest2)

if(rest2.owner) {
  rest2.owner = 'Anonymous'
}
console.log(rest2)



