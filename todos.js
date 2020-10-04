//Create a HTML using JavaScript and store data in Brownser's Local Storage

// select the ul, input and button HTML Element
var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input'); 
var buttonElement = document.querySelector('#app button');

// it it's a string JSON.parse() converts the string object to an array.
// Or if it's a list object will be put straight into an array.
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = ''; //clean the list
    for (todo of todos) {
        var todoElement = document.createElement('li'); //creates a <li> HTML element
        var todoText = document.createTextNode(todo); // get the text into todo variable.
        
        var linkElement = document.createElement('a'); // creates an ancor element <a>
        var linkText = document.createTextNode('Excluir') // creates the text 'Excluir'
        
        var pos = todos.indexOf(todo); // get the index of todo [0] [1]...
        // crate an event onclick and sets the deleteTodo function and concatanat each index to recover the phrase.
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')'); 
       
        linkElement.appendChild(linkText); // put the link Excluir
        linkElement.setAttribute('href', '#'); //set href attribute on link Excluir

        
        todoElement.appendChild(todoText); //put the text in a <li> element
        todoElement.appendChild(linkElement); // put the link in a <li> element

        listElement.appendChild(todoElement); //send the <li> with the text to HTML document
        
    }

}

renderTodos(); // runs the function renderTodos()

// function to add an element in the array
function addTodo() {
    var todoText = inputElement.value; // put the typed text into todoText variable
    todos.push(todoText); // put the typed text into the array Todos using the push() method
    inputElement.value = '' // clear the field of input
    renderTodos(); // runs the function renderTodos
    saveToStorage(); // runs the function saveToStorage
}

buttonElement.onclick = addTodo; // runs the addTodo function when click on the button

// function to delete the item from the storage
function deleteTodo(pos) {
    todos.splice(pos, 1); // Remove an item from array
    renderTodos(); // runs the function renderTodos
    saveToStorage(); // Save the result of renderTodos without the item removed
}

// function to save in the brownser's local storage
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos)); // JSON.stringfy() transform the array into a string

}