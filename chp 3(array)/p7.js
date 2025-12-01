const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.shift()
theList.pop()
console.log(theList)

//add First to the start of the array
theList.unshift("First")
console.log(theList)
theList[4]="hello world"
console.log(theList)

theList[3]="Middle"
theList.push("Last")
console.log(theList)