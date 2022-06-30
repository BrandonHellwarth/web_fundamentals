nums = [23, 0, 30, 24, 8, 6, 1, 22];
nums1 = [4, 8, 0, 2, 5];
/*prints all values in the array and then checks to see if numtofind is in the array. It will print the index position of numtofind, otherwise will print -1*/
function searchfornum(arr, numtofind){
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
    for(a=0;a<arr.length;a++){
        if(arr[a] == numtofind){
            return a-1;
        }
    }
    return -1;
}
console.log(searchfornum(nums1, 1));

nestednums = [[4,8,10],[3,6,9],[23,24,99]];
console.log(nestednums[0][2]);/*for a nested array first position is the nested arrays index number, second position is the numbers index inside the nested array.*/

function searchnestedarray(arr, num){
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
        subarr = arr[i];
        for(j=0;j<subarr.length;j++){
            console.log(arr[i][j]);
            if(arr[i][j] == num){
                return {i,j}
            }
        }
    }
}
console.log(searchnestedarray(nestednums, 9));
/*need a console.log on a function to print a return statement*/