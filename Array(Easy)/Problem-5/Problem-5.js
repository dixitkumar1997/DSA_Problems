// Ques:-Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Soln:-

let nums = [1,2,3,1,1,3];

function numIdenticalPairs(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]===nums[j]){
              count++;
            }
        }
    }
    return count;
};


console.log(numIdenticalPairs(nums))