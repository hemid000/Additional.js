const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}



const num1 = [1 , 2 , 3]

const num2 = num1.map((el)=>{
  let after = {val : el}
  return(after)
  
})
console.log(num2);