// libs
import { router } from 'expo-router';
import { useState } from 'react';
// enums
import InputTypes from '@/app/types/enums/input';
// theme
import theme from '@/theme';
// icons
import { AntDesign } from '@expo/vector-icons';
// components
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

export default function Profile() {
	const [username, setUsername] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleUpdate = () => {
		if (newPassword !== confirmPassword) {
			alert('New passwords do not match');
			return;
		}
		// Handle the update logic here (e.g., API call)
		alert('Profile updated successfully!');
	};

	return (
		<ScrollView style={styles.screenContainer}>
			<View style={styles.titleContainer}>
				<TouchableOpacity onPress={() => router.back()}>
					<AntDesign name="back" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.title}>Profile</Text>
			</View>

			<View style={styles.container}>
				<Input label="Username" placeholder="Enter your username" value={username} setValue={setUsername} />

				<Input
					label="Birthdate"
					placeholder="Enter your birthdate"
					type={InputTypes.DATE}
					value={birthdate}
					setValue={setBirthdate}
				/>

				<Input
					label="Old Password"
					placeholder="Enter your old password"
					value={oldPassword}
					setValue={setOldPassword}
					isSecure
				/>

				<Input
					label="New Password"
					placeholder="Enter your new password"
					value={newPassword}
					setValue={setNewPassword}
					isSecure
				/>

				<Input
					label="Confirm New Password"
					placeholder="Confirm your new password"
					value={confirmPassword}
					setValue={setConfirmPassword}
					isSecure
				/>
			</View>

			<Button title="Update Profile" onPress={handleUpdate} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		paddingHorizontal: 12,
		width: '100%',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 50,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		gap: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: theme.colors.red,
	},
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginVertical: 20,
	},
});
