import React from "react";

// componentes
import Navbar from "components/Navigation/Navbar/index";

// navigation settings
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// pages
import Home from "pages/home/index";
import SplashScreen from "pages/splash";
import SpaScreen from "pages/home/spa";

export const routes = {
	home: "home",
	splash: "splash",
	spa: "spa",
};

const Stack = createStackNavigator();

function Routes() {
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={routes.splash}
					screenOptions={{
						header: (props) => <Navbar {...props} />,
					}}
				>
					<Stack.Screen name="home" component={Home} />
					<Stack.Screen
						name="splash"
						component={SplashScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="spa"
						component={SpaScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

export default Routes;
