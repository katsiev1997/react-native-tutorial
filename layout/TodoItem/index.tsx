import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
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
			<View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
				<StyledCheckbox checked={isCompleted} onCheck={() => {}} />
				<StyledText style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}>
					{title}
				</StyledText>
			</View>
			<View style={styles.controls_container}>
				<StyledButton icon="pencil" size="small" />
				<StyledButton icon="trash" size="small" variant="delete" />
			</View>
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
	controls_container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
});

export default TodoItem;
