/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
      let expenditureList=[];

      transactions.forEach(element => {
          let indx=expenditureList.findIndex(ele=> ele.category==element.category)
          if(indx >-1)  expenditureList[indx] ["totalSpent"] +=element.price;
          else{
            let resultObj={};
            resultObj["category"] =  element.category;
            resultObj["totalSpent"] =  element.price;
            expenditureList.push(resultObj);
          } 
      });
      return expenditureList;
}

module.exports = calculateTotalSpentByCategory;
