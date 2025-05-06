import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
	totalTodos: number;
	completedTodos: number;
};

const Header = ({ totalTodos, completedTodos }: HeaderProps) => {
	return (
		<View style={style.container}>
			<View style={style.headerMainContent}>
				<StyledText>Todo</StyledText>
				<StyledText>March 15, 2025</StyledText>
			</View>
			<StyledText>
				Completed {completedTodos} / {totalTodos}
			</StyledText>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		paddingTop: 80,
		paddingBottom: 15,
		paddingHorizontal: 20,
		backgroundColor: COLORS.SECONDARY_BACKGROUND,
	},
	headerMainContent: {
		marginBottom: 20,
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
});

export default Header;
