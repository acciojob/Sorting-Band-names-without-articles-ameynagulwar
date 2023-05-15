//your code here
let arr = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
let updatedList = arr.map((element) => {
// ["a", "some", "one"]
let words = element.split(" ") ;
let updatedString = words.reduce((prev, current, index) => {
if(current != "The" && current != "an" && current != "a"){
return prev + " " + current ;
}
return prev ;
}, "")
return updatedString ;
}) ;
let mp = {} ; 
updatedList.forEach( (element, index) => {
mp[element] = arr[index] ;
});
updatedList.sort();
let finalAns = updatedList.map((element) => {
return mp[element] ;
})
console.log(finalAns);