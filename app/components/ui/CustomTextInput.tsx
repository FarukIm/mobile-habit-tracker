import theme from '@/theme';
import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

type CustomTextInputProps = TextInputProps & {
	label?: string;
	placeholder?: string;
	inputMode?: 'text' | 'email' | 'password' | 'numeric' | 'tel' | 'url';
	setValue: (value: string) => void;
	error?: string;
	isMandatory?: boolean;
	isSecure?: boolean;
	marginTop?: number;
};

export default function CustomTextInput({
	label,
	inputMode,
	setValue,
	placeholder="...",
	error=undefined,
	isMandatory = false,
	isSecure = false,
	marginTop = 0,
}: CustomTextInputProps) {

	const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: marginTop,
	},
	label: {
		marginBottom: 2,
		fontSize: 18,
		fontWeight: 'bold',
		color: theme.colors.dark,
		paddingLeft: 10,
	},
	inputContainer: {
		borderWidth: 2,
		borderColor: theme.colors.gray,
		borderRadius: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: '100%',
		fontSize: 18,
		color: theme.colors.dark,
		margin: 0,
	},
	error: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: 12,
		color: theme.colors.red,
	},
});

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={styles.inputContainer}>
				<TextInput
					placeholder={placeholder}
					style={styles.input}
					placeholderTextColor="#999"
					inputMode={inputMode}
					secureTextEntry={isSecure}
					onChangeText={(e) => setValue(e)}
				/>
			</View>
			{isMandatory && error && (
				<Text style={styles.error}>*{label} is mandatory field</Text>
			)}
		</View>
	);
}


