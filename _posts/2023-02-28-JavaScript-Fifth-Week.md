---
title: Fifth week of Javascript
date: 2023-02-28
---
<h3><b>Elaborated Details</b></h3>
<p>
This week I have learned about truthy falsy values, short circuit evaluation, ternary operators, elseif and switch.
</p>
<p>
<h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/truthyfalsy.js">Truthy Falsy</a></h4>
When you want to check if a variable exists without passing a value to it. In the below example, the if condition will run, even though the variable is not explicitly
defined, it evaluates to true.
</p>
<pre>
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
</pre>
<p>
  Let's look at another example. In the below example, you can see that the else condition is executed. Because numberOfApples has 0 in it. It is considered as falsy
  value. The other falsy values include empty string '', null, undefined and NaN.
</p>
<pre>
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}
// Prints 'No apples left!'
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/sc-eval.js">Short Circuit</a> Evaluation</h4> 
Here || or statements checks the left condition first. The defaultName is assigned to username if it is truthy. It will be assigned stranger if it is falsy. This concept
is called as short circuit evaluation. 
</p>
<pre>
let username = '';
let defaultName = username || 'Stranger';
 
console.log(defaultName); // Prints: Stranger
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/ternary.js">Ternary Operator</a></h4>
A ternary operator is used to simplify the if else statements. It is written in the following format. After the condition gets evaluated, if it is true statement before
the colon gets executed, if it false statement after the colon gets executed.
condition? true expression:false expression.
 <pre>
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
</pre>
</p>
 <p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/elseif.js">Else if</a></h4>
If there are more than two conditions, you use else if statements. The else if statement comes after if block and before else block. 
 <pre>
let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
</pre>
</p>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/switch.js">Switch case</a></h4>
If there are multiple conditions like more then 100, it is hard to write else if statements. In such cases, we use switch.  
 <pre>
let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}
</pre>
</p>
<b> Challenges </b>
<p>
The challenge here is understanding truthy falsy values and short circuit evaluation. I haven't learnt this concept in other programming languages too.  
</p>
<h3><b>Summary</b></h3>
<p>
This week I have learned about truthy falsy values, short circuit evaluation, ternary operators, elseif and switch.
</p>
  
