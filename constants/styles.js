import * as React from "react";
import { StyleSheet } from "react-native";

{
	/*
In this file you can create multiple css styles to be used troughout the app
as with other things, we use export here to be able to import the STYLES object in other files
Basically all styling should be done trough this file to keep the main app cole as clean as possible
*/
}

{
	/*Under here is the STYLES object, every style should be contained in it*/
}
{
	/*
The example style should remain to give people an idea of how it works
In the exaple, you can put css styling, the syntax is a bit different, for correct usage check react native docs
To use the styles, give the object in the app code the style attribute with STYLES.x where x is the spesific style in this file you want
*/
}

//Global variables
const colorBase = "#E9EDF0";
const colorAlt = "#E8EAEC";
const colorAccent = "#389ADE";
const colorDark = "#1F5673";
const colorDarker = "#000000";
const colorError = "red";

const font = "Raleway";
const fontMedium = "RalewayMedium";
const fontLight = "RalewayLight";
const fontBold = "RalewayBold";
const fsXXXL = 68;
const fsXXL = 52;
const fsXL = 36;
const fsL = 24;
const fsM = 16;
const fsSm = 12;
const fsXs = 8;
const borderRadius = 8;

//example stylesheet - don't touch
export const STYLES = StyleSheet.create({
	div: {
		borderWidth: 5,
		borderColor: "black",
	},

	example: {
		backgroundColor: "white",
	},
});

//Global styles for elements - should consist only of colors pretty much
export const ELSTYLES = StyleSheet.create({
	title: {
		fontFamily: font,
		fontSize: fsXXXL,
		color: colorBase,
		marginBottom: 16,
	},
	titleSm: {
		fontFamily: fontMedium,
		fontSize: fsL,
		color: colorBase,
	},

	txtL: {
		fontSize: fsL,
	},
	label: {
		fontFamily: font,
		fontSize: fsL,
		marginTop: 6,
	},
	labelM: {
		fontFamily: font,
		fontSize: fsM,
		marginTop: 16,
	},
	input: {
		fontSize: fsSm,
		fontFamily: fontLight,
		backgroundColor: colorBase,
		borderRadius: borderRadius,
		paddingVertical: 8,
		paddingHorizontal: 12,
		marginTop: 8,
		marginBottom: 8,
		borderWidth: 2,
		borderColor: colorAccent,
		color: colorDarker,
	},

	button: {
		backgroundColor: colorBase,
		borderRadius: borderRadius,
		borderColor: colorAccent,
		borderWidth: 2,
		color: colorDark,
		marginVertical: 4,
	},
	buttonPressed: {
		backgroundColor: colorAccent,
		borderRadius: borderRadius,
		borderColor: colorBase,
		borderWidth: 2,
		marginVertical: 4,
	},

	buttonTxt: {
		font: font,
		color: colorAccent,
	},
	buttonTxtPressed: {
		font: font,
		color: colorBase,
	},

	errrorMsg: {
		color: colorError,
		font: fontMedium,
		fontSize: fsSm,
		marginBottom: 8,
		fontStyle: "italic",
	},

	forgotPasswordTxt: {
		color: colorDarker,
		font: font,
		fontStyle: "italic",
		fontSize: fsXs,
		textDecorationLine: "underline",
		marginVertical: 12,
	},
});

//login layout and element specifics
export const LOGIN = StyleSheet.create({
	bgColors: () => ({
		color1: colorAccent,
		color2: colorDark,
	}),
	contentWrapper: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	container: {
		backgroundColor: colorAlt,
		borderRadius: borderRadius,
		padding: 16,
		width: 250,
		marginBottom: 52,
	},

	loginBtn: {
		alignSelf: "flex-start",
		paddingHorizontal: "8%",
		paddingVertical: "4%",
	},
});

//landing layout and element specifics
export const LANDING = StyleSheet.create({
	bgColors: () => ({
		color1: colorAccent,
		color2: colorDark,
	}),
	contentWrapper: {
		flex: 1,
		justifyContent: "space-around",
		paddingHorizontal: 50,
	},
	buttonWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonLanding: {
		alignSelf: "center",
		flex: 1,
		alignItems: "center",
		paddingVertical: "8%",
	},
	titleWrapper: {
		flex: 1,
		justifyContent: "center",
	},
});

//register layout
export const REGISTER = StyleSheet.create({
	bgColors: () => ({
		color1: colorAccent,
		color2: colorDark,
	}),

	screenWrapper: {
		backgroundColor: colorAccent,
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	inputContainer: {
		backgroundColor: colorAlt,
		padding: 16,
		width: 250,
		borderRadius: borderRadius,
	},

	registerBtn: {
		alignSelf: "flex-start",
		paddingHorizontal: "8%",
		paddingVertical: "4%",
		fontSize: fsXL,
	},

	addLicenceBtn: {
		paddingVertical: "4%",
		textAlign: "center",
		fontSize: fsSm,
	},
});
