import { View, Text, Pressable } from "react-native";
import { ELSTYLES } from "../constants/styles";
import { STARTGIG } from "../constants/styles";
import React from "react";

/*This screen is very similar to the GigApplyScreen, because apparently the 
only thing changing is that the apply-button changes to start-button*/

const GigStartScreen = () => {
	return (
		<View style={STARTGIG.screenWrapper}>
			<View style={STARTGIG.mapWrapper}>
				<Text style={{ fontSize: 36 }}>Map goes here</Text>
			</View>
			<View style={STARTGIG.infoBtnWrapper}>
				<Pressable>
					<Text>Settings icon here</Text>
				</Pressable>

				<Pressable>
					<Text>Find icon here </Text>
				</Pressable>
			</View>
			<View style={STARTGIG.infoWrapper}>
				<View style={STARTGIG.ratingWrapper}>
					<Text style={STARTGIG.rating}>Rating goes here</Text>
				</View>
				<Text>Route:</Text>
				<Text>Turku–Helsinki</Text>
				<Text>Pickup time 00:00–14:00</Text>
				<Text>Delivery time 00:00–14:00</Text>
				<Text>Pay: 69eur</Text>
				<Text>Fuel budget 69eur</Text>
				<Text>Client name</Text>
				<View style={STARTGIG.buttonWrapper}>
					<Pressable>
						<Text>Start</Text>
					</Pressable>

					<Pressable>
						<Text>Contact info</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default GigStartScreen;
