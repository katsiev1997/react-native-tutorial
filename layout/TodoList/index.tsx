import { Todo } from "@/types/todo";
import React from "react";
import { FlatList, View } from "react-native";
import TodoItem from "../TodoItem";

type TodoListProps = {
	todos: Todo[];
};

const TodoList = ({ todos }: TodoListProps) => {
	return (
		<View>
			<FlatList
				data={todos}
				keyExtractor={(todo) => todo.id.toString()}
				renderItem={({ item }) => (
					<TodoItem title={item.title} isCompleted={item.isCompleted} />
				)}
			/>
		</View>
	);
};

export default TodoList;
