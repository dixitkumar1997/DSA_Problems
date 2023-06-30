// Ques:- You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Soln:-


let accounts = [[1,2,3],[3,2,1]];

function maximumWealth(accounts) {
    let max=0;
    for(let i=0;i<accounts.length;i++){
        let sum=0;
       for(let j=0;j<accounts[i].length;j++){
        sum+=accounts[i][j]
    }
    if(sum>max){
        max=sum;
    }
    }
    return max
};

console.log(maximumWealth(accounts))