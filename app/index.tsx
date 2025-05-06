import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos = [
	{ id: 1, title: "Buy milk", isCompleted: false },
	{ id: 2, title: "Walk the dog", isCompleted: false },
	{ id: 3, title: "Do laundry", isCompleted: true },
];

export default function Index() {
	const [todos, setTodos] = useState<Todo[]>(defaultTodos);
	const completedTodos = todos.filter((item) => item.isCompleted);
	return (
		<View style={styles.container}>
			<StatusBar barStyle={"light-content"} />
			<Header totalTodos={todos.length} completedTodos={completedTodos.length} />
			<TodoList todos={todos} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.PRIMARY_BACKGROUND,
	},
});
