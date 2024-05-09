/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str=str.toLowerCase();
    let j=0;
    let n= str.length;
    console.log("before-"+str+"n"+n+"#"+j);
    for(let i=0;i<n;i++){
      if(str[i]>='a'||str[i]<='z'){
        str[j]=str[i];
        j++;
      }
    }
    n=str.length;
    console.log("after-"+str+"n"+n+"#"+j);
    let front=0;
    let end=n-1;
    while(front<=end){
      if(str[front]!=str[end]){
        return false;
      }
      front++;
      end--;
    }
    return true;
  }
  
  isPalindrome("Able, was I ere I saw Elba!");
  module.exports = isPalindrome;





  str=str.toLowerCase();
  n=str.length;
  let front=0;
  let end=n-1;
  while(front<=end){
    if(str[front]<='a'|| str[front]>='z'){
      front++;
    }
    if(str[end]<='a'|| str[end]>='z'){
      end--;
    }
    if(str[front]!=str[end]){
      return false;
    }
    front++;
    end--;
  }
  return true;