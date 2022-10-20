// Problem1identifyPrime

let num = 13

 let count=0;
    for (let i=1;i<=num;i++){
        if(num%i===0){
            count++;
        }
    }
    if(count==2){
        console.log("Yes");
    }else{
        console.log("No");
    }

//problem2checkPalindrome

let N=6;
let str="nrupul";

 let new_str = "";
  for(let i=N-1;i>=0;i--){
      new_str = new_str + str[i];
  }
  if(str==new_str){
      console.log("Yes");
  }else{
      console.log("No");
  }