let empname="poovizhi"
let targetChar='i'
let count =0

for(let i=0;i<empname.length; i++)
{
if(empname.charAt(i)===targetChar)
{
    count++
}
}
//console.log("The charcter '" +targetChar + "' appears " + count + " times in '" +empname + "'.") 

console.log("The charcter i appears these many times in name: " + count) 