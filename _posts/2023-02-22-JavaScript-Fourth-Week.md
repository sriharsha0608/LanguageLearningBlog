---
title: Fourth week of Javascript
date: 2023-02-22
---
<h3><b>Elaborated Details</b></h3>
<p>
This week I have learned about Conditional Statements (if else), Comparision operators, Logical Operators.
</p>
<p>
<h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/ifelse.js">If else</a></h4>
This is same as all other programming languages. If a condition is true, certain block of code is executed. If not, the other block of code is executed.    
</p>
<pre>
if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!'); // Here the else statement is executed as the condition given is false.
}
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/comparison_operator.js">Comparison Operators</a></h4> 
The comparison operators used in JavaScript are <, >, <=, >=, ===, !==.
Few comparison operators used in JavaScript are similar to other programming languages and few are different. In Javascript, when you try to check if two values are equal,
you use '===' operator instead of '==' and for not equal, we use '!==' instead of '!='. In JavaScript, the '==' operator only checks the values and not the data types, 
and also '==' operator performs type coercion. Coercion means converting of one datatype into another. 
 </p>
<pre>
console.log(10<12); // Prints true
console.log('apples'==='oranges'); // Prints false
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/logical_operator.js">Logical Operators</a></h4>
 The logical operators used in JavaScript are-
 <p>1. Logical and (&&) </p>
 <p>2. Logical or (||) </p>
 <p>3. Not operator (!) </p>
 <pre>
 let stopLight = 'green';
 let pedestrians = 0;
 if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!'); // Prints Go!
} else {
  console.log('Stop');
}
</pre>
</p>
 
<b> Challenges </b>
<p>
The main challenge here is using equal to operator '==='. We generally use '==' in all other programming languages. So, we can make a lot of mistakes over there. 
Instead of performing comparison, you may run a coercion program. It'll be easier as you get habituated to the language.
</p>
<h3><b>Summary</b></h3>
<p>
This week I have learned about conditional statements, comparison operators and logical operators.
</p>
  
