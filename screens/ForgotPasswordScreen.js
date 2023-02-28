import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { FORGOTPASS } from "../constants/styles";
import { ELSTYLES } from "../constants/styles";

const ForgotPasswordScreen = () => {
	return (
		<View style={FORGOTPASS.forgotWrapper}>
			<Text style={ELSTYLES.titleSm}>Forgot your password?</Text>
			<View style={FORGOTPASS.contentWrapper}>
				<Text style={ELSTYLES.txt}>
					We will send you a message to recover your account
				</Text>
				<Text style={ELSTYLES.label}>Email:</Text>

				<TextInput
					style={ELSTYLES.input}
					placeholder="Typed email address goes here"></TextInput>

				<Pressable style={[ELSTYLES.button, FORGOTPASS.submitBtn]}>
					<Text style={ELSTYLES.buttonTxt}>Recover account</Text>
				</Pressable>
			</View>

			{/*}
			
    {*/}
		</View>
	);
};

export default ForgotPasswordScreen;
