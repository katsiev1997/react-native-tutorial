import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";

type StyledButtonProps = TouchableOpacityProps & {
	label?: string;
	icon?: React.ComponentProps<typeof Ionicons>["name"];
	size?: "default" | "small" | "large";
	variant?: "primary" | "delete";
};

const StyledButton = ({
	label,
	icon,
	size = "default",
	variant = "primary",
	...props
}: StyledButtonProps) => {
	return (
		<TouchableOpacity
			style={[
				style.base,
				size === "small" ? style["small"] : null,
				variant === "delete" ? style.delete : null,
				props.style,
			]}
			{...props}
		>
			{label && <StyledText>{label}</StyledText>}
			{icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
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
		borderRadius: 10,
	},
	// Sizes
	small: {
		paddingVertical: 12,
		paddingHorizontal: 12,
	},
	large: {
		paddingVertical: 16,
		paddingHorizontal: 24,
	},
	// Variants
	primary: {
		backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
		borderColor: COLORS.PRIMARY_ACTIVE_BUTTON,
	},
	delete: {
		backgroundColor: COLORS.PRIMARY_RED,
		borderColor: COLORS.PRIMARY_RED,
	},
});

export default StyledButton;
