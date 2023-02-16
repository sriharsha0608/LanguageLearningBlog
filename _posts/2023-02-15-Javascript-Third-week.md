---
title: Third week of Javascript
date: 2023-02-15
---
<h3><b>Elaborated Details</b></h3>
<p>
This week I have learned about String Interpolation, typeof operator, and few string methods.
</p>
<p>
<h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/stringinterpolation.js">String Interpolation</a></h4>
String interpolation in JavaScript is a way to insert variables or expressions into a string. It allows you to create dynamic strings that change based on the values of variables or expressions.    
</p>
<pre>
let myName='Harsha';
let myCity='Rajahmundry';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`); //Output: My name is Harsha. My favorite city is Rajahmundry.

</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/typeof.js">typeof</a> operator</h4> 
 Typeof is used when you want to check the datatype of a variable's value. 
 In the below code, when you concatenate a string and a number, javascript considers it as string. So, when you check the data type of sentence, it displays string.
 </p>
<pre>
let name='Harsha';
let age = 23;
sentence= name + age;
console.log(sentence); //Prints Harsha23
console.log(typeof sentence); //Prints string
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/methods.js">String Methods</a></h4>
 Here are a few methods of strings in javascript.</p>
 <p> To print length of a string.</p>
 <code>console.log('Hello'.length); // Prints 5</code><br><br>
 <p>
 To change the string into uppercase.</p>
 <code>console.log('Codecademy'.toUpperCase()); // Prints CODECADEMY</code><br><br>
 <p>
 To change the string into lowercase.</p>
 <code>console.log('CODING'.toLowerCase()); // Prints coding</code><br><br>
 <p> To remove whitespaces in a string </p>
 <code>console.log('   Remove Whitespaces   '.trim()); // Prints 'Remove Whitespaces' </code><br><br>
 <p> To print the substrings of a string. </p>
 <pre>
const str = 'Harsha';
console.log(str.substring(0,3)); //Prints Har
console.log(str.substring(1));   //Prints arsha
</pre><br>
 
<p> There is a learning <a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/kelvin.js">objective </a>to convert temperature from kelvin to celsius, then to fahrenheit. </p>
 
<p>
The challenge was understanding string interpolation and getting used to the syntaxes. The syntaxes and keywords used are different from other languages. 
So, it was a bit challenging. 
  

</p>
<h3><b>Summary</b></h3>
<p>
This week I have learned about string interpolation, typeof operator, and string methods. I have also completed a learning objective.
</p>
  
