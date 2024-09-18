  function calculateDifference(a,b){
    return a-b;
  }
  
  function calculate(){
    let num1=parseFloat(document.getElementById("num1").value) 
  let num2= parseFloat(document.getElementById("num2").value)
 let difference= calculateDifference(num1,num2);
document.getElementById('calculateresult').innerHTML=difference;
  
  }

//  Project 2  ODD Calculate  Start-->
   function isOdd(number){
    return number % 2 ==0;
   }
   function oddnumbersubmit(){
     let oddnumber=document.getElementById('oddnumber').value;
      let result=isOdd(parseInt(oddnumber));
      document.getElementById('oddNumberResult').innerHTML=result ? 'True' : 'False'

   }
//  Project 2  ODD Calculate  END-->


//  Project 3 Array Smallert Number  Calculate  Start-->

    function findMin(arr){
      return Math.min(...arr);
   }
    function arraynumbersubmit(){
      let arraynumber=document.getElementById('arraynumber').value;
    let numberArray= arraynumber.split(',').map(Number);
   let result= findMin(numberArray);
   document.getElementById('arraynumberResult').innerHTML=`: ${result}`

    }

//  Project 3 Array Smallert Number  Calculate  END-->

//  Project 4 Array EVENT Number  Calculate  Start-->
 
   function filterEventNumbers(arr){
return arr.filter(num=>num % 2 === 0)
   }
 function arrayeventnumberbtn(){
      let arrayEventnumber=document.getElementById('arrayEventnumber').value;
       let arraystring= arrayEventnumber.split(',').map(Number);
       let result= filterEventNumbers(arraystring);
       document.getElementById('arrayEventnumberResult').innerHTML=`: ${result}`
    }
//  Project 4 Array EVENT Number  Calculate END-->




//  Project 5 Array Descending Order  Calculate  Start
 function sortArrayDescending(arr){
   return arr.sort((a,b)=> b-a);
 }
  function descendingorderbtn(){
   let descendingordernumber= document.getElementById('descendingordernumber').value;
  let inputvalue= descendingordernumber.split(',').map(Number);
  let result=sortArrayDescending(inputvalue);
  document.getElementById('descendingorderResult').innerHTML=`: ${result}`
  }

//  Project 5 Array Descending Order  Calculate  END


//  Project 6 lowercase First Letter Calculate  St
function lowercaseFirstLetter(str) {
  if (str.length === 0) return str; 
  return str.charAt(0).toLowerCase() + str.slice(1); 
}
function convertString() {
  const input = document.getElementById('inputString').value; 
  const result = lowercaseFirstLetter(input);
  document.getElementById('result').innerText = result; 
}
//  Project 6 lowercase First Letter  Calculate  END

//  Project 7 Count Vowels  Calculate START

function countVowels(str) {
  const vowels = 'aeiouAEIOU'; 
  let count = 0; 
  for (let char of str) {
      if (vowels.includes(char)) {
          count++; 
      }
  }
  return count; 
}
function countVowelsInString() {
  const input = document.getElementById('inputString').value; 
  const result = countVowels(input); 
  document.getElementById('result').innerText = `: ${result}`;
}
//  Project 7  Count Vowels  END

//  Project 8  Count Vowels  start
 
function findAverage(numbers) {
  if (numbers.length === 0) return 0; 
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); 
  return sum / numbers.length;
}

function calculateAverage() {
  const input = document.getElementById('inputNumbersaverage').value; 
  const numbers = input.split(',').map(num => parseFloat(num.trim())); 
  const average = findAverage(numbers); 
  document.getElementById('demo').innerText = `: ${average}`; 
}


//  Project 8  Count Vowels  END

