
var data = filter(processEmails());
console.log(data.benchmark);

document.getElementById("emails").innerHTML = data.benchmark.totalEmails;
document.getElementById("filtered").innerHTML = data.benchmark.filteredCount;
document.getElementById("time").innerHTML = data.benchmark.totalTime;
