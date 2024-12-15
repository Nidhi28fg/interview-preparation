# interview-preparation


**HTML:**

```html
<h1>Todo list</h1>

<div id="todoParent">
    <div id="todo-1" style="display: flex;">
        <h4>1. Take class</h4>
        <button onclick="deleteTodo(1)">delete</button>
    </div>
    <div id="todo-2" style="display: flex;">
        <h4>2. Go out to eat</h4>
        <button onclick="deleteTodo(2)">delete</button>
    </div>
</div>

<input type="text"></input>
<button>Add Todo</button>
```

**JavaScript:**

```javascript
function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    element.innerHTML = "";
}
```

**Explanation:**

**HTML:**

- The code creates a heading with the text "Todo list."
- A `div` with the ID `todoParent` is created to hold the todo items.
- Two `div` elements with IDs `todo-1` and `todo-2` are created for each todo item. Each `div` contains an `h4` element for the task description and a `button` element with an `onclick` attribute that calls the `deleteTodo()` function.
- The `button`'s `onclick` attribute passes the index of the task to the `deleteTodo()` function.
- The last `div` contains an `input` element for adding new tasks and a `button` to trigger the addition (though the functionality for adding tasks is not shown in this code).

**JavaScript:**

- The `deleteTodo(index)` function takes an index as an argument.
- It uses `document.getElementById()` to get the `div` element with the specified ID (e.g., `todo-1`).
- It then sets the `innerHTML` of the element to an empty string, effectively removing the content but keeping the `div` element in the DOM.

**How it works:**

1. When a user clicks the "delete" button for a task, the `onclick` attribute calls the `deleteTodo()` function with the index of the task.
2. The `deleteTodo()` function finds the corresponding `div` element using its ID.
3. The `innerHTML` of the element is set to an empty string, removing the content but leaving the `div` element in the DOM.

**Note:**

- This code doesn't actually remove the `div` element from the DOM, so the deleted task will still be visible as an empty `div`.
- To completely remove the element, you would need to use `parentNode.removeChild(element)`.

This code demonstrates a basic to-do list with a delete functionality that clears the content of a task but doesn't remove the element itself.


```html
<html>
<body id="body">
    <h2>Todo 1</h2>
    <h2>Todo 2</h2>
    <h2>Todo 3</h2>
    <button onclick="deleteRandomTodo()">Updating todo!</button>
</body>

<script>
function deleteRandomTodo() {
    const element = document.querySelector("h2");
    const parentElement = element.parentNode;
    parentElement.removeChild(element);
}
</script>
</html>
```

**Explanation:**

**HTML:**

- The code creates three `h2` elements with the text "Todo 1," "Todo 2," and "Todo 3."
- A button with the text "Updating todo!" is added, and its `onclick` attribute is set to call the `deleteRandomTodo()` function.

**JavaScript:**

```javascript
function deleteRandomTodo() {
    const element = document.querySelector("h2");
    const parentElement = element.parentNode;
    parentElement.removeChild(element);
}
```

- The `deleteRandomTodo()` function is defined.
- Inside the function:
    - `document.querySelector("h2")` selects the first `h2` element found in the document.
    - `element.parentNode` gets the parent element of the selected `h2` element.
    - `parentElement.removeChild(element)` removes the selected `h2` element from the DOM.

**How it works:**

1. When the button is clicked, the `deleteRandomTodo()` function is called.
2. The function selects the first `h2` element on the page.
3. It then removes that `h2` element from its parent element, effectively deleting it from the page.

**Note:**

- This code will always delete the first `h2` element, regardless of its content.
- If you want to delete a random `h2` element, you would need to modify the code to select a random element from the list of `h2` elements. 

This code demonstrates a basic example of DOM manipulation, where an element is removed from the page based on a button click.

concept of DOM manipulation -

**DOM (Document Object Model)**

The DOM is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree-like structure of nodes, where each node represents a specific part of the document.

**Static HTML vs. Dynamic HTML**

* **Static HTML:** This is the basic structure of an HTML document, where the content remains fixed. It's like a static image that doesn't change.

* **Dynamic HTML:** This involves manipulating the DOM to make the content interactive and responsive. You can change the content, style, or structure of the document using JavaScript. Think of it as a dynamic webpage where elements can be added, removed, or modified on the fly.

**DOM Manipulation Techniques**

The image highlights several key techniques for manipulating the DOM:

1. **Fetching Elements:**
   - This involves selecting specific elements within the DOM using various methods like:
     - `getElementById()`
     - `getElementsByClassName()`
     - `getElementsByTagName()`
     - `querySelector()`
     - `querySelectorAll()`

2. **Updating Elements:**
   - Once you've selected an element, you can modify its properties, such as:
     - `innerHTML` (to change the content)
     - `textContent` (to change the text content)
     - `style` (to change the CSS styles)
     - `attributes` (to change attributes like `src` or `href`)

3. **Deleting Elements:**
   - You can remove elements from the DOM using the `removeChild()` method.

4. **Adding Elements:**
   - You can create new elements using `createElement()`, set their properties, and append them to the DOM using methods like `appendChild()`, `insertBefore()`, or `insertAfter()`.

5. **More Complex Elements:**
   - This refers to creating and manipulating more intricate structures within the DOM, such as tables, forms, or interactive components.

**Example:**

```javascript
// Fetching an element
const heading = document.getElementById('my-heading');

// Updating the element's content
heading.textContent = 'Hello, World!';

// Adding a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Deleting an element
const elementToDelete = document.getElementById('element-to-delete');
elementToDelete.parentNode.removeChild(elementToDelete);
```

**Applications of DOM Manipulation**

- Building dynamic web pages that respond to user interactions
- Creating interactive user interfaces
- Building web applications
- Creating web games and animations
- Dynamically loading content
- Creating single-page applications (SPAs)

Let me know if you'd like to delve into any specific aspect of DOM manipulation in more detail!

Here's the code from the image you provided:

**HTML:**

```html
<div id="todoParent">
<div id="todo-1" style="display: flex;">
    <h4>1. Take class</h4>
    <button onclick="deleteTodo(1)">delete</button>
</div>

<div id="todo-2" style="display: flex;">
    <h4>2. Go out to eat</h4>
    <button onclick="deleteTodo(2)">delete</button>
</div>

<input type="text"></input>
<button>Add Todo</button>
</div>
```

**JavaScript:**

```javascript
function deleteTodo(index) {
    const element = document.getElementById("todo-" + index);
    document.getElementById("todoParent").removeChild(element);
}
```

**Explanation:**

**HTML:**

- The code creates two `div` elements with IDs `todo-1` and `todo-2`.
- Each `div` contains an `h4` element for the task description and a `button` element with an `onclick` attribute that calls the `deleteTodo()` function.
- The `button`'s `onclick` attribute passes the index of the task to the `deleteTodo()` function.
- The third `div` contains an `input` element for adding new tasks and a `button` to trigger the addition (though the functionality for adding tasks is not shown in this code).

**JavaScript:**

- The `deleteTodo(index)` function takes an index as an argument.
- It uses `document.getElementById()` to get the `div` element with the specified ID (e.g., `todo-1`).
- It then uses `parentNode.removeChild()` to remove the element from the DOM, effectively deleting the task from the list.

**How it works:**

1. When a user clicks the "delete" button for a task, the `onclick` attribute calls the `deleteTodo()` function with the index of the task.
2. The `deleteTodo()` function finds the corresponding `div` element using its ID.
3. The `removeChild()` method removes the element from the DOM, effectively deleting the task from the list.

This code implements a simple to-do list with a delete functionality. Users can add tasks by typing them into the input field and clicking the "Add Todo" button (though the functionality for adding tasks is not shown in this code). To delete a task, they can click the "delete" button next to the task.



```javascript
let ctr = 0;

function callback() {
  document.querySelectorAll("h2")[1].innerHTML = ctr;
  ctr = ctr + 1;
}

setInterval(callback, 1000);
```

**Explanation:**

**1. `let ctr = 0;`**
   - This line declares a variable named `ctr` and initializes it with the value `0`. This variable will be used to keep track of the number of times the `callback` function is executed.

**2. `function callback() { ... }`**
   - This line defines a function named `callback`. This function will be executed repeatedly at regular intervals.

**3. `document.querySelectorAll("h2")[1].innerHTML = ctr;`**
   - This line selects the second `h2` element on the page and sets its inner HTML content to the current value of the `ctr` variable.

**4. `ctr = ctr + 1;`**
   - This line increments the value of the `ctr` variable by 1. This is done to keep track of how many times the `callback` function has been executed.

**5. `setInterval(callback, 1000);`**
   - This line schedules the `callback` function to be executed every 1000 milliseconds (1 second). The `setInterval` function takes two arguments: the function to be executed and the interval in milliseconds.

**What the code does:**

- The `ctr` variable starts with the value `0`.
- The `callback` function is executed every second.
- Each time the `callback` function is executed, it takes the current value of `ctr`, converts it to a string, and sets the inner HTML content of the second `h2` element to that string. Then, it increments `ctr` by 1.
- This process continues indefinitely, so you'll see a sequence of numbers displayed in the second `h2` element on the page, each one second apart.

**Example Output:**

Initially, the second `h2` element might be empty or have some other content.

After 1 second, it will display: `0`

After 2 seconds, it will display: `1`

After 3 seconds, it will display: `2`

And so on.

This code demonstrates the use of the `setInterval` function to create a simple counter that updates the content of an HTML element every second.

Here's the code from the image:

```javascript
let ctr = 0;

function callback() {
  console.log(ctr);
  ctr = ctr + 1;
}

setInterval(callback, 1000);
```

**Explanation:**

**1. `let ctr = 0;`**
   - This line declares a variable named `ctr` and initializes it with the value `0`. This variable will be used to keep track of the number of times the `callback` function is executed.

**2. `function callback() { ... }`**
   - This line defines a function named `callback`. This function will be executed repeatedly at regular intervals.

**3. `console.log(ctr);`**
   - Inside the `callback` function, this line prints the current value of the `ctr` variable to the console.

**4. `ctr = ctr + 1;`**
   - This line increments the value of the `ctr` variable by 1. This is done to keep track of how many times the `callback` function has been executed.

**5. `setInterval(callback, 1000);`**
   - This line schedules the `callback` function to be executed every 1000 milliseconds (1 second). The `setInterval` function takes two arguments: the function to be executed and the interval in milliseconds.

**What the code does:**

- The `ctr` variable starts with the value `0`.
- The `callback` function is executed every second.
- Each time the `callback` function is executed, it prints the current value of `ctr` to the console and then increments `ctr` by 1.
- This process continues indefinitely, so you'll see a sequence of numbers printed to the console, each one second apart.

**Example Output:**

```
0
1
2
3
4
5
...
```

This code demonstrates the basic use of the `setInterval` function to create a simple timer that logs a counter value to the console every second.



```javascript
document.querySelectorAll("h4")[1].innerHTML = "asdasdasddsa"
```

**Explanation:**

1. **`document.querySelectorAll("h4")`**: This part selects all elements with the tag name `h4` in the HTML document.
2. **`[1]`**: This index accesses the second `h4` element in the list. (Remember, arrays in JavaScript are zero-indexed.)
3. **`.innerHTML`**: This property gets or sets the inner HTML content of the selected element.
4. **`= "asdasdasddsa"`**: This assigns the string "asdasdasddsa" as the new inner HTML content of the second `h4` element.

**In simpler terms:**

This code finds the second `h4` element on the page and replaces its content with the text "asdasdasddsa".

**Example:**

If your HTML has this:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h4>This is the first h4</h4>
<h4>This is the second h4</h4>
```

After running the JavaScript code, the second `h4` will become:

```html
<h4>asdasdasddsa</h4>
```

**Note:**

- The string "asdasdasddsa" can be replaced with any other text or HTML content you want to insert.
- If there are fewer than two `h4` elements, the code might throw an error or have unexpected behavior.




**Understanding the `new` Keyword in JavaScript**

In JavaScript, the `new` keyword is used to create a new instance of an object. It performs the following steps:

1. **Creates a new empty object:** It allocates memory for a new object.
2. **Sets the `this` keyword:** It sets the `this` keyword within the constructor function to refer to the newly created object.
3. **Executes the constructor:** It calls the constructor function, passing the provided arguments.
4. **Returns the object:** It returns the newly created object.

**In the given code:**

```javascript
const rect = new Rectangle(2, 4);
```

1. **A new object is created:** A new empty object is created in memory.
2. **`this` is set:** The `this` keyword inside the `Rectangle` constructor now refers to this new object.
3. **Constructor execution:** The constructor is called with arguments `2` and `4`. These values are assigned to the `width` and `height` properties of the new object, respectively. The `color` property is not explicitly set, so it remains undefined.
4. **Object returned:** The newly created `Rectangle` object is assigned to the `rect` variable.

**To summarize:**

- The `new` keyword is essential for creating object instances in JavaScript.
- It ensures proper initialization of object properties and method execution.
- By using `new`, you can create multiple instances of a class, each with its own set of properties and behaviors.

**Additional Notes:**

- While the `color` property is not explicitly set in this example, it's good practice to initialize all properties within the constructor to avoid potential `undefined` values.
- You can create multiple `Rectangle` objects with different dimensions and colors:

```javascript
const rect1 = new Rectangle(2, 4, "red");
const rect2 = new Rectangle(5, 3, "blue");
```

By understanding the `new` keyword and object-oriented concepts, you can effectively create and manipulate objects in JavaScript.


```javascript
function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

// Promise chaining
setTimeoutPromisified(1000)
  .then(() => {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(() => {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(() => {
    console.log("hi there");
  });

console.log("outside the callback hell");

// Promise chaining
const sortedString = str1.split("").sort().join("").toLowerCase();
// asd => ["a", "s", "d"] => ["a", "d", "s"] => "asd"
```

**Explanation:**

**1. `setTimeoutPromisified` Function:**

- This function takes a `duration` in milliseconds as input.
- It returns a new `Promise` object.
- Inside the `Promise` constructor, `setTimeout` is used to schedule the resolution of the promise after the specified `duration`.

**2. Promise Chaining:**

- A series of `.then()` calls are used to chain promises together.
- Each `.then()` block:
    - Logs a message to the console.
    - Returns a new `setTimeoutPromisified` call to create the next promise in the chain.

**3. Output:**

The output will be:

```
outside the callback hell
hi
hello
hi there
```

**Key Points:**

- **Callback Hell:** The traditional way of nesting `setTimeout` callbacks can lead to "callback hell", where code becomes hard to read and maintain.
- **Promise Chaining:** This approach uses promises to create a more readable and manageable way of handling asynchronous operations.
- **Asynchronous Operations:** The `setTimeout` function is an asynchronous operation, meaning it doesn't block the execution of other code while waiting for the specified time to pass.
- **Promise Resolution:** When the specified time elapses, the promise is resolved, and the next `.then()` block in the chain is executed.

This code demonstrates how promise chaining can be used to avoid callback hell and make asynchronous code more organized and easier to understand.



```javascript
function setTimeoutPromisified(duration) {
  return new Promise(function(resolve) {
    setTimeout(resolve, duration);
  });
}

async function solve() {
  await setTimeoutPromisified(1000);
  console.log("hi");

  await setTimeoutPromisified(3000);
  console.log("hello");

  await setTimeoutPromisified(5000);
  console.log("hi there");
}

solve();
```

**Explanation:**

**1. `setTimeoutPromisified` Function:**

- This function takes a `duration` in milliseconds as input.
- It returns a new `Promise` object.
- Inside the `Promise` constructor, `setTimeout` is used to schedule the resolution of the promise after the specified `duration`.

**2. `solve` Function:**

- This function is declared as `async` to allow the use of the `await` keyword.
- It uses `await` to pause the execution of the function until the promise returned by `setTimeoutPromisified` is resolved.
- After each `await`, the corresponding log statement is executed.

**3. Output:**

The output will be:

```
hi
hello
hi there
```

**Key Points:**

- **Callback Hell:** The traditional way of nesting `setTimeout` callbacks can lead to "callback hell", where code becomes hard to read and maintain.
- **Promise Chaining:** This approach uses promises to create a more readable and manageable way of handling asynchronous operations.
- **Asynchronous Operations:** The `setTimeout` function is an asynchronous operation, meaning it doesn't block the execution of other code while waiting for the specified time to pass.
- **Promise Resolution:** When the specified time elapses, the promise is resolved, and the next `await` statement in the chain is executed.

This code demonstrates how `async/await` can be used to make asynchronous code more readable and easier to understand.



1. A **primitive data** structure allows you to store only single data type values. A non-primitive data structure enables you to store multiple data types. Integer, boolean, character, float, etc. are examples of primitive data structures.
2. **Primitive types** are stored directly in memory and have a fixed size.  The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. The non-primitive data type consists of the object.
3. **Context** lets components pass information deep down in the component tree without explicitly passing props. This is useful when you want to pass data to a child component without passing it through intermediate components. ----- State Management
4. **fs.readfilesync** reads the file from the disk synchronously, blocking the other processes until the operation is finished. This method is useful when blocking the code execution is accepted e.g. in startup scripts.
5. ![image](https://github.com/user-attachments/assets/e280f958-d5db-41c4-8ae1-c0c209d8507f)
6. Sychronous - In synchronous programming, operations are performed one after the other, in sequence. So, basically, each line of code waits for the previous one to finish before proceeding to the next.
   https://www.geeksforgeeks.org/synchronous-and-asynchronous-in-javascript/
8. ![image](https://github.com/user-attachments/assets/a6762eba-4132-4b0f-b90a-12b1130fa17c)

margin: 0px auto;
margin-top: 0px;
margin-bottom: 0px;
margin-left: auto;
margin-right: auto;



```html
<div id="todo-1" style="display: flex;">
  <h4>1. Take class</h4>
  <button onclick="deleteTodo(1)">delete</button>
</div>

<div id="todo-2">
  <h4>2. Go out to eat</h4>
  <button onclick="deleteTodo(2)">delete</button>
</div>

<div>
  <input type="text"></input>
  <button>Add Todo</button>
</div>
```

```javascript
function deleteTodo(index) {
  const element = document.getElementById("todo-" + index);
  element.parentNode.removeChild(element);
}
```

**Explanation:**

**HTML:**

- The code creates two `div` elements with IDs `todo-1` and `todo-2`.
- Each `div` contains an `h4` element for the task description and a `button` element with an `onclick` attribute that calls the `deleteTodo()` function.
- The `button`'s `onclick` attribute passes the index of the task to the `deleteTodo()` function.
- The third `div` contains an `input` element for adding new tasks and a `button` to trigger the addition.

**JavaScript:**

- The `deleteTodo(index)` function takes an index as an argument.
- It uses `document.getElementById()` to get the `div` element with the specified ID (e.g., `todo-1`).
- It then uses `parentNode.removeChild()` to remove the element from the DOM.

**How it works:**

1. When a user clicks the "delete" button for a task, the `onclick` attribute calls the `deleteTodo()` function with the index of the task.
2. The `deleteTodo()` function finds the corresponding `div` element using its ID.
3. The `removeChild()` method removes the element from the DOM, effectively deleting the task from the list.

This code implements a simple to-do list with a delete functionality. Users can add tasks by typing them into the input field and clicking the "Add Todo" button. To delete a task, they can click the "delete" button next to the task.





