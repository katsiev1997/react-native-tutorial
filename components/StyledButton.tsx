import { COLORS } from "@/constants/ui";
import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
	label?: string;
};

const StyledButton = ({ label, ...props }: StyledButtonProps) => {
	return (
		<TouchableOpacity style={style.base} {...props}>
			{label && <StyledText>{label}</StyledText>}
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	base: {
		backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderWidth: 1,
		borderRadius: 4,
	},
});

export default StyledButton;
