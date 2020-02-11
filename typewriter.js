



let sentence = "hello there from lighthouse labs \n";
sentence = sentence.split("")
for (const index in sentence) {
  setTimeout(()=> {
    process.stdout.write (sentence[index]);
  }, index + 50);
}

// for (const char of sentence) {

// setTimeout(() => {
//   // print the char here
// }, 1000) // <= 1s delay to make it noticeable. Can dial it down later.
//   process.stdout.write(char);
// }


//const increment (num)=>{
  //   setTimeout(() => {
  //     // print the char here
  //   }, 1000)
  // }