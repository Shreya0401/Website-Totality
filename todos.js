const form = document.getElementById('form')
const list = document.getElementById('list')
const todolist = document.getElementById('todos')
const todos = JSON.parse(localStorage.getItem('todos'))

if (todos) {
    todos.forEach(todo => addTask(todo))
}

form.addEventListener('submit', (x) => {
    x.preventDefault()
    addTask()
})
function addTask(todo) {
    let todoText = list.value
    if (todo) {
        todoText = todo.text
    }

    if (todoText) {
        const element = document.createElement('li')
        if (todo && todo.completed) {
            element.classList.add('completed')

        }
        element.innerText = todoText
        element.addEventListener('click', () => {
            element.classList.toggle('completed')
            f()
        })
        element.addEventListener('contextmenu', (x) => {
            x.preventDefault()
            element.remove()
            f()
        })
        todolist.appendChild(element)
        list.value = ''
        f()
    }
}

function f() {
    elements = document.querySelectorAll('li')
    const todos = []
    elements.forEach(element => {
        todos.push({
            text: element.innerText,
            completed: element.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}
