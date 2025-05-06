import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import React from "react";
import { StyleSheet, View } from "react-native";

type TodoProps = {
	title: string;
	isCompleted: boolean;
};

const TodoItem = ({ title, isCompleted }: TodoProps) => {
	return (
		<View style={[styles.container]}>
			<StyledText style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}>
				{title}
			</StyledText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignContent: "center",
		justifyContent: "space-between",
		padding: 15,
		marginVertical: 8,
		backgroundColor: COLORS.SECONDARY_BACKGROUND,
	},
});

export default TodoItem;
