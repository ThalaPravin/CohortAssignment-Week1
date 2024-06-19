/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
      let strMap= new Map();
      let strMap2=new Map();

      for(let i=0; i<str1.length; i++){
          let character= str1[i].toLowerCase();
          if(strMap.has(character)){
            let count= strMap.get(character);
            strMap.set(character, count+1);
          }
          else {
            strMap.set(character, 1);
          }
      }

      for(let i=0; i<str2.length; i++){
        let character= str2[i].toLowerCase();
        if(strMap2.has(character)){
          let count= strMap2.get(character);
          strMap2.set(character, count+1);
        }
        else{
          strMap2.set(character, 1);
        }
      }

      if(strMap.size!=strMap2.size)   return false;
         

      strMap.forEach((key, val)=>{
          if(strMap.get(key)!=strMap2.get(key))  return false;
          
      });

      return true;

  
}

module.exports = isAnagram;
