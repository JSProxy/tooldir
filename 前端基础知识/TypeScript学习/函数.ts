
//用户必须明确的传入 undefined值来获得默认值
function buildName1(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
let result1 = buildName1("Bob");                  // error, too few parameters
let result2 = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName1("Bob", "Adams");         // okay and returns "Bob Adams"
let result4 = buildName1(undefined, "Adams"); 


// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) 
{
  return firstName + " " + restOfName.join(" ");
}
let employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
//参数类型
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName2;


//函数重载
//在定义重载的时候，一定要把最精确的定义放在最前面。
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {};

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。



