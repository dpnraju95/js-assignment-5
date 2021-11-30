function CreateObject(arr) {
    // Write your code here

    dit= {}

    for(let i=0;i<arr.length;i=i+2){
        dit[arr[i]] = arr[i+1]
    }

    return dit

}

module.exports = CreateObject;