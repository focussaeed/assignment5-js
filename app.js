// Chapter 21
// Q.1

var userinput=prompt("Enter User Name");
allLower=userinput.toLowerCase();
console.log(allLower);

// Q.2

document.write("<br> x=x.toLowercase()");

// Q.3
document.write("<br>  y=y.toUppercase()");

// Q.4
var city="SIALKOT";
allLower=city.toLowerCase();
console.log(allLower);

// Q.5
var city=["KARACHI","LAHORE","ISLAMABAD","PESHAWAR"];

allLower=city[2].toLowerCase();
console.log(allLower);

// Q.7
var cityName="kaRachi";
firstletter=cityName.slice(0,1).toUpperCase();
remainchar=cityName.slice(1).toLowerCase();
console.log(firstletter+remainchar);

// Chapter 22-25
// Q.1
var sameWord="captian";
newWord=sameWord.slice(1,3);
console.log(newWord);


// Q.2
var sameWord="captian";
wordLength=sameWord.length;
console.log(wordLength);

// Q.3
var animalName="elephent";
newWord=animalName.slice(2,6);
console.log(newWord);

// Q.4
var animalName="elephent";
noofchar=animalName.length;
console.log(noofchar);

// Q.5
var animalName="elephent";
firstchar=animalName.slice(0,1);
A=animalName.length-3
lastchar=animalName.slice(A,8)
console.log(firstchar);
console.log(lastchar);

// Q.6
var text="To be or not to be.";
var indx=text.indexOf("be");
console.log(indx);


// Q.7
var text="To be or not to be.";
var indx=text.lastIndexOf("be");
console.log(indx);

// Q.8
var text="To be or not to be.";
var indx=text.lastIndexOf("be");
console.log(indx);

// Q.10
var str1="abcd";
char2index=str1.charAt(2);
console.log(char2index);


// Q.11
var str1="PakistanZindabad";
char2index=str1.charAt(10);
console.log(char2index);

// Q.12
var str1="PakistanZindabad";
lastChar=str1.charAt(str1.length-1);
console.log(lastChar);

// Q.13
var str2=prompt("Enter Country Name");
char5th=str2.charAt(4);
console.log(char5th);

// Q.14
var str2=prompt("Enter Name");
Char3rd=str2.charAt(2);
if (Char3rd === "e"){
console.log("3rd Character Matched");
} else {
    console.log("3rd Character Not Matched");
}

// Q.15
var str1="Pakistan";
var array1=[];
for (var i=0; i<=str1.length-1; i++){
array1[i]=str1.charAt(i);
}
console.log(array1)

// Q.16     
var str="This is World War 1";
var newStr=str.replace("1","One");
console.log(newStr);

// Q.17
var str="This is World War 1";
var newStr=str.replaceAll("1","One");
console.log(newStr);


// Chapter 26
// Q.1
var num1=9.75;
console.log(Math.round(num1));

// Q.2
var origNum=8.62;
roundNum=Math.round(origNum);
console.log(roundNum);

// Q.3
var origNum=8.62;
roundNum=Math.floor(origNum);
console.log(roundNum);

// Q.4
var origNum=105.08;
roundNum=Math.ceil(origNum);
console.log(roundNum);

// Q.5
var origNum=0.50;
roundNum=Math.floor(origNum);
console.log(roundNum);

// Chapter 27
// Q.1
var randomNum=Math.random()*50;
console.log(randomNum);

// Q.2
var randomNum=Math.random();
console.log(randomNum);

// Q.3

// Q.3

// Chapter 28

// Q.1
console.log("We cas convert string into integer by using parseInt and Number method.");

// Q.2
var str="123";
console.log(typeof Number(str));

// Q.3
var num1="3.5687"
console.log(parseFloat(num1));

// Q.4
console.log("We cas check by using typeof.");

// Q.5
console.log("We cas convert integer into string by using toString() metod.");


// Q.6
var num1=42
console.log(typeof num1.toString());

// Q.7
var str="3.14";
console.log(typeof Number(str));

// Chapter 30
// Q.1
var num=24.5689752.toFixed(4);
newNum=num.toString();
console.log(typeof newNum);

// Q.2
var num=24.5689752;
num = Number(num.toFixed(2));
console.log(typeof num);

// Q.3
var num=24.5689752;
num2=num.toFixed(2);
if ( num2.length > 4  ) {
    console.log("Length is greather than 4 character")
}

// Q.4
var num=24.5689752;
alert(num.toFixed(2));
console.log(typeof num.toFixed(2).toString());




// Q.1
// Q.1


