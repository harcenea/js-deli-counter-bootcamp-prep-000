

function takeANumber(katzDeliLine, name) {
  
  katzDeliLine = [];
  
  katzDeliLine.unshift(name);
  
  var position = katzDeliLine.length;
  
 return  `Welcome, ${name}. You are number ${position} in line.`;
}