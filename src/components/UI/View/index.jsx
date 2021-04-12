import React from "react";
import { View } from "react-native";

import { styles } from "./styles";

function UIView({ children = "" }) {
	return <View style={styles}>{children}</View>;
}

export default UIView;
export { UIView };
