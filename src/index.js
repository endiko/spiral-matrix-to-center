console.clear();
var inputNum = 11; 
var arr = [];
var res = Math.ceil(Math.sqrt(inputNum));

(res % 2 === 0) ? res += 1 : res;

var curr = Math.pow(res, 2);
var i = res - 1, 
    j = res - 1, 
    di = 0, 
    dj = -1, 
    lap = 0;

var ci = (res - 1)/2, 
    cj = (res - 1)/2;

for(let i=0; i< res; i++) {
  arr[i] = [];
}

while(curr > 0) {
  if (i === (res - lap - 1) && j === lap) {
    di = -1;
    dj = 0;
  } else if (i === lap && j === lap) {
    di = 0;
    dj = 1;
  } else if (i === lap && j === (res - lap - 1)) {
    di = 1;
    dj = 0;
  } else if (i === (res - lap - 2) && j === (res - lap - 1)) {
    di = 0;
    dj = -1;
    lap++;
  }
  arr[i][j] = curr;
  i += di; j += dj;
  curr--;
}

console.log(arr);

