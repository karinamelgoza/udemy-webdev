let todoList = []
let input = prompt('Please enter a command')
while (input !== 'quit') {
    if (input === 'new') {
        let todo = prompt('Add a new todo')
        todoList.push(todo)
    } else if (input === 'list') {
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
    } else if (input === 'delete') {
        let index = parseInt(prompt('Enter the index of the todo to delete'))
        while (Number.isNaN(index)) {
            index = parseInt(prompt('Please enter a valid index number'))
        }
        let deleted = todoList.splice(index, 1)
        console.log(`${deleted} has been deleted`)
    } else {
        alert('Please enter a valid command')
    }
    input = prompt('Please enter a command')
}
console.log('You have quit the app.')