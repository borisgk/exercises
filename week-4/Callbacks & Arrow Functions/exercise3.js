const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

const logData = function(value) {
    console.log(value)
}
  
  displayData(alert, logData, "I like to party")