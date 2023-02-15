import * as React from "react";
import { Text, View, TextInput, Alert, Pressable } from "react-native";
import { STYLES } from "../constants/styles";
import { LAYOUT } from "../constants/styles";
import { LOGIN } from "../constants/styles";

{
	/*Placeholder variable for checking login details*/
}
const correctLogin = true;

{
	/*Main loginscreen function*/
}
const LoginScreen = ({ navigation, route }) => {
	return (
		<View style={LOGIN.contentWrapper}>
			<View>
				<Text style={LOGIN.title}>Log in</Text>

				<View style={LOGIN.container}>
					<Text style={LOGIN.errrorMsg}>
						This is where error will appear if wrong username/password
					</Text>
					<Text style={LOGIN.label}>Username:</Text>
					<TextInput style={LOGIN.input} placeholder="Username" />
					<Text style={LOGIN.label}>Password:</Text>
					<TextInput style={LOGIN.input} placeholder="Username" />
					<Text style={LOGIN.forgotPasswordTxt}>Forgot your password?</Text>
					<Pressable
						style={LOGIN.button}
						onPress={() => checkLogin(navigation)}>
						<Text style={LOGIN.buttonTxt}> Login </Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

const checkLogin = (navigation) => {
	{
		/*Checks whether login details are correct, alert pops up if they are not*/
	}
	if (correctLogin == true) {
		{
			/*Atm always true because the correctLogin thing hardcoded in*/
		}
		{
			/*Uses the navigation module to switch to the home screen in the navigation stack*/
		}
		navigation.navigate("Home");
	} else {
		Alert.alert(
			"Incorrect login",
			"Wrong password or username",
			[{ text: "OK" }],
			{ cancelable: true }
		);
	}
};

{
	/*Export the loginscreen function so it can be used in the navigation stack in the app.js file*/
}
export default LoginScreen;
