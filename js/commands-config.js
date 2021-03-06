angular.module('todomvc').config(function($commangularProvider) {

	//Load all the todos.
	$commangularProvider.mapTo('LoadTodos').asSequence()
		.add('LoadStorageCommand');
		
	//Add a new todo to the todos list.
	$commangularProvider.mapTo('AddTodo').asSequence()
		.add('AddTodoCommand')
		.add('SaveStorageCommand');
	
	//Remove a todo
	$commangularProvider.mapTo('RemoveTodo').asSequence()
		.add('RemoveTodoCommand')
		.add('SaveStorageCommand');
	
	//Mark all command complete
	$commangularProvider.mapTo('MarkAll').asSequence()
		.add('MarkAllCommand')
		.add('SaveStorageCommand');
	
	//Mark one todo complete
	$commangularProvider.mapTo('MarkOne').asSequence()
		.add('SaveStorageCommand');
	
	//Clear all todos completed
	$commangularProvider.mapTo('ClearCompleted').asSequence()
		.add('ClearCompletedCommand')
		.add('SaveStorageCommand');

	//Close editing and save
	//If the todo has an empty title, the todo will be removed.
	$commangularProvider.mapTo('DoneEditing').asSequence()
		.add('DoneEditingCommand')
		.add($commangularProvider.asFlow()
			//If todo.title is empty
			.link("!todo.title").to('RemoveTodoCommand'))
		.add('SaveStorageCommand');
		
});