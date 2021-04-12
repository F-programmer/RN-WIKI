import React from "react";
import { Text } from "react-native";

function UIText({
	children,
	size = 14,
	color = "var(--t-primary)",
	italic = false,
	weight = 400,
}) {
	const traslated = {
		100: "Poppins_100Thin",
		200: "Poppins_200ExtraLight",
		300: "Poppins_300Light",
		400: "Poppins_400Regular",
		500: "Poppins_500Medium",
		600: "Poppins_600SemiBold",
		700: "Poppins_700Bold",
		800: "Poppins_800ExtraBold",
		900: "Poppins_900Black",
	};

	const translatedItalic = {
		100: "Poppins_100Thin_Italic",
		200: "Poppins_200ExtraLight_Italic",
		300: "Poppins_300Light_Italic",
		400: "Poppins_400Regular_Italic",
		500: "Poppins_500Medium_Italic",
		600: "Poppins_600SemiBold_Italic",
		700: "Poppins_700Bold_Italic",
		800: "Poppins_800ExtraBold_Italic",
		900: "Poppins_900Black_Italic",
	};

	let paddingVertical = 6;

	return (
		<Text
			style={{
				fontSize: size,
				paddingVertical,
				// Note the quoting of the value for `fontFamily` here; it expects a string!
				fontFamily: italic ? translatedItalic[weight] : traslated[weight],
				color,
			}}
		>
			{children}
		</Text>
	);
}

export default UIText;
export { UIText };
