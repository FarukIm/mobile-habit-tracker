import { InputTypes } from '@/app/types/enums/input';
import theme from '@/theme';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type CustomTextInputProps = TextInputProps & {
	label?: string;
	placeholder?: string;
	type?: InputTypes;
	multiLine?: boolean;
	value?: string;
	setValue: (value: string) => void;
	error?: string;
	isMandatory?: boolean;
	isSecure?: boolean;
	marginTop?: number;
};

export default function Input({
	label,
	type = InputTypes.TEXT,
	value,
	setValue,
	placeholder = '...',
	multiLine = false,
	error = undefined,
	isMandatory = false,
	isSecure = false,
}: CustomTextInputProps) {
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	const handleConfirm = (date: Date) => {
		setValue(date.toISOString().split('T')[0]);
		setDatePickerVisibility(false);
	};

	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={styles.inputContainer}>
				{type === InputTypes.DATE ? (
					<>
						<TouchableOpacity onPress={() => setDatePickerVisibility(true)} style={styles.dateInput}>
							<Text style={styles.dateText}>{value?.length ? value : '...'}</Text>
						</TouchableOpacity>
						<DateTimePickerModal
							isVisible={isDatePickerVisible}
							mode="date"
							onConfirm={handleConfirm}
							onCancel={() => setDatePickerVisibility(false)}
						/>
					</>
				) : (
					<TextInput
						placeholder={placeholder}
						value={value}
						style={styles.input}
						placeholderTextColor="#999"
						multiline={multiLine}
						numberOfLines={4}
						inputMode={type}
						secureTextEntry={isSecure}
						onChangeText={(e) => setValue(e)}
					/>
				)}
			</View>
			{isMandatory && error && <Text style={styles.error}>*{label} is mandatory field</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
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
	dateInput: {
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: '100%',
		fontSize: 18,
		color: theme.colors.dark,
		margin: 0,		
	},
	dateText: {
		color: theme.colors.dark,
	},
	error: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: 12,
		color: theme.colors.red,
	},
});
