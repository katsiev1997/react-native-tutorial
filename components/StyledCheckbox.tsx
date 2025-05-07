import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

type StyledCheckboxProps = {
	checked: boolean;
	onCheck: () => void;
};
const StyledCheckbox = ({ checked, onCheck }: StyledCheckboxProps) => {
	return (
		<TouchableOpacity onPress={onCheck}>
			<Ionicons
				name={checked ? "checkmark-circle" : "ellipse-outline"}
				size={24}
				color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
			/>
		</TouchableOpacity>
	);
};

export default StyledCheckbox;
