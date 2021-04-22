
/*변수 선언과할당*/
/*변수는 선언과 할당을 동시에 할 수 있다.*/
// var num = 15;
// var num; //변수를 선언한다.
// num = 5; //변수의 값을 할당한다. 처음 할당되는 것을 '변수를 초기화'라고 한다.
// console.log(num)// 1번 로직 작동
// num = 10; //변수에 값을 재할당한다 라고 한다.  처음에 5선언 뒤 그뒤에 10선언한거면 위에서 내려오면서 덮어쓰기 되므로.
// console.log(num);// 2번 로직 작동




// /*변수 다중 선언*/
// var sum1, sum2, sum3, total, count, avg;
// sum1 = 10;
// sum2 = 5;
// sum3 = 20;
// total = sum1 + sum2 + sum3;
// count = 3;
// avg = (sum1 + sum2 +sum3)/count;
// console.log('합산은 '+total+'점 입니다.'); //문자열 변수의 조합으로 출력
// console.log('평균은 '+avg+'점 입니다.');





/*원주율*/   //원주율:3.14(pi), R(radius):반지름, 원둘레:2*pi*R(radius), 원넓이: pi*R(radius)*R(radius)
var pi = 3.14;
var radius = 10;
var result;   //결과 값을 담을 수 있는 변수 선언.. 할당은안햇음.

//둘레 계산식
result = 2*pi*radius;
console.log('원의 둘레는 '+result+'입니다');

//넓이 계산식
result = pi*radius*radius;
console.log('원의 넓이는 '+result+'입니다');









/*자료형 종류*/    //string은 문자열
var stringVar = 'string'; //문자열 타입
var numberVar = 12345;  //숫자 타입
var booleanVar = true;  //true or false 값을 반환하는 불타입
var functionVar = function(){}; //함수형 타입
var objectVar = {/*여러가지의 데이터(함수, 문자, 불, 숫자 들..)의그룹을 여기 넣으면 된다*/}; //객체 타입
