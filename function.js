const addButton = document.getElementById('add');
export const todo = [
	{
		title: 'Go to Bank',
		description:
			'Gotta update my banking records as well as improve the daily transaction limit update my banking records as well as improve the daily transaction limit update my banking records as well as improve the daily transaction limit update my banking records as well as improve the daily transaction limitupdate my banking records as well as improve the daily transaction limit',
	},
];

function addTodo() {
	const todoTitle = document.getElementById('card-number').value;
	const todoDescription = document.getElementById('cvv-number').value;

	const newTodo = {
		title: todoTitle,
		description: todoDescription,
	};

	todo.push(newTodo);
}

addButton.addEventListener('click', addTodo);
