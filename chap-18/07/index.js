function logString(num, /*str, str2, str3*/...args) {
    // var args = Array.prototype.slice.call(arguments);
    console.log(num, /*str, str2, str3*/args);
}

let spreadArray = ['WFM', 'WFM2', 'WFM3', 'WFM4'];
// logString(20, 'WFM', 'WFM2', 'WFM3', 'WFM4');
logString(20, ...spreadArray);
