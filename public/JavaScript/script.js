const users = [
  { name: "Ali", email: "ali1@example.com", age: 24 },
  { name: "Sara", email: "sara2@example.com", age: 30 },
  { name: "Reza", email: "reza3@example.com", age: 27 },
  { name: "Neda", email: "neda4@example.com", age: 22 },
  { name: "Omid", email: "omid5@example.com", age: 35 },
  { name: "Mina", email: "mina6@example.com", age: 28 },
  { name: "Hassan", email: "hassan7@example.com", age: 31 },
  { name: "Leila", email: "leila8@example.com", age: 26 },
  { name: "Shahram", email: "shahram9@example.com", age: 33 },
  { name: "Niloofar", email: "niloofar10@example.com", age: 29 },
  { name: "Pouya", email: "pouya11@example.com", age: 24 },
  { name: "Parisa", email: "parisa12@example.com", age: 27 },
  { name: "Kamran", email: "kamran13@example.com", age: 32 },
  { name: "Sahar", email: "sahar14@example.com", age: 25 },
  { name: "Aria", email: "aria15@example.com", age: 28 },
  { name: "Shirin", email: "shirin16@example.com", age: 23 },
  { name: "Kaveh", email: "kaveh17@example.com", age: 34 },
  { name: "Mahsa", email: "mahsa18@example.com", age: 26 },
  { name: "Navid", email: "navid19@example.com", age: 31 },
  { name: "Tara", email: "tara20@example.com", age: 22 },
  { name: "Behnam", email: "behnam21@example.com", age: 29 },
  { name: "Elham", email: "elham22@example.com", age: 27 },
  { name: "Farhad", email: "farhad23@example.com", age: 33 },
  { name: "Sima", email: "sima24@example.com", age: 24 },
  { name: "Pirooz", email: "pirooz25@example.com", age: 30 },
  { name: "Narges", email: "narges26@example.com", age: 28 },
  { name: "Kian", email: "kian27@example.com", age: 25 },
  { name: "Arezoo", email: "arezoo28@example.com", age: 31 },
  { name: "Babak", email: "babak29@example.com", age: 34 },
  { name: "Darya", email: "darya30@example.com", age: 23 },
  { name: "Soroush", email: "soroush31@example.com", age: 29 },
  { name: "Roxana", email: "roxana32@example.com", age: 27 },
  { name: "Ehsan", email: "ehsan33@example.com", age: 32 },
  { name: "Ladan", email: "ladan34@example.com", age: 24 },
  { name: "Vahid", email: "vahid35@example.com", age: 28 },
  { name: "Samira", email: "samira36@example.com", age: 26 },
  { name: "Navid", email: "navid37@example.com", age: 33 },
  { name: "Ramin", email: "ramin38@example.com", age: 31 },
  { name: "Hoda", email: "hoda39@example.com", age: 25 },
  { name: "Shahab", email: "shahab40@example.com", age: 29 },
  { name: "Mojgan", email: "mojgan41@example.com", age: 22 },
  { name: "Siavash", email: "siavash42@example.com", age: 30 },
  { name: "Yasmin", email: "yasmin43@example.com", age: 27 },
  { name: "Pantea", email: "pantea44@example.com", age: 24 },
  { name: "Hamed", email: "hamed45@example.com", age: 33 },
  { name: "Shahla", email: "shahla46@example.com", age: 28 },
  { name: "Kourosh", email: "kourosh47@example.com", age: 35 },
  { name: "Marjan", email: "marjan48@example.com", age: 26 },
  { name: "Omid", email: "omid49@example.com", age: 29 },
  { name: "Leila", email: "leila50@example.com", age: 31 }
];

console.log(users);

fetch("http://localhost:3000/create",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(users)
})
.then(resp => resp.json())
.then(res => console.log(res))
.catch(err => console.error(err));