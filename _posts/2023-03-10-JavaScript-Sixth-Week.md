---
title: Sixth week of Javascript
date: 2023-03-10
---
<h3><b>Elaborated Details</b></h3>
<p>
This week I have learned about the following details:
</p>
<p>
This week I have completed a learning objective i.e., <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/magicball.js">Magic eight ball</a></h4>
</p>

<p>
  Functions:
  In JavaScript, there are many ways to create a function. One way to create a function is by using a 
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/functiondeclaration.js">Function Declaration</a></h4>
</p>
<pre>
function greetWorld() {
  console.log('Hello, World!');
}
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/callingfunction.js">Calling a function</a></h4> 
We can call a function by simply writing the name of the function followed by paranthesis.
</p>
<pre>
function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
// Calling it three times
sayThanks();
sayThanks();
sayThanks();
</pre>
<p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/functionparam.js">Parameter Arguments</a></h4>
So far, we only created functions without input. Now, we'll see how to pass inputs to functions.
 <pre>
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole'); 
</pre>
There is a new feature called default parameter introduced recently. When we don't assign anything the default parameter is taken as input. 
When we don't pass anything as input stranger is considered as default input.
<pre>
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
</pre>
</p>
 <p>
 <h4><a href="https://github.com/sriharsha0608/LanguageLearningBlog/blob/main/code/return.js">Return in functions</a></h4>
To return the value of a function.
 <pre>
function rectangleArea(width, height) {
  let area = width * height;
  return area;
}
console.log(rectangleArea(5, 7)) // Prints 35.
</pre>
</p>

<b> Challenges </b>
<p>
The challenge is understanding functions and its syntax, how to use parameters. They may take some time.  
</p>
<h3><b>Summary</b></h3>
<p>
This week I have completed a learning objective i.e. magic eight ball and also I started learning functions. Function declaration, calling a function, passing parameters
and returning value are the other concepts I have learned.
</p>
  
