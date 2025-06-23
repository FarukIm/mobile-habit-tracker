// libs
import { router } from 'expo-router';
import { useState } from 'react';
// enums
import InputTypes from '@/app/types/enums/input';
// theme
import theme from '@/theme';
// components
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

export default function Registration() {
	const [username, setUsername] = useState('');
	const [birthdate, setBirthdate] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleRegister = () => {
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		alert('Registration successful!');
		router.push('/dashboard');
	};

	return (
		<KeyboardAvoidingView style={styles.screenContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.innerContainer}>
					<Text style={{ fontSize: 26, marginBottom: 20, fontWeight: 'bold', color: theme.colors.red }}>Register</Text>

					<Input label="Username" placeholder="Username" value={username} setValue={setEmail} />

					<Input label="Email" placeholder="Email" value={email} setValue={setUsername} />

					<Input
						label="Birthdate"
						placeholder="Birthdate"
						type={InputTypes.DATE}
						value={birthdate}
						setValue={setBirthdate}
					/>

					<Input label="Password" placeholder="Password" value={password} setValue={setPassword} isSecure />

					<Input
						label="Confirm Password"
						placeholder="Confirm Password"
						value={confirmPassword}
						setValue={setConfirmPassword}
						isSecure
					/>

					<Button title="Sign up" onPress={() => handleRegister()} />

					<Text style={{ fontSize: 18 }}>
						Already have an account?{' '}
						<Text style={{ color: theme.colors.red, fontWeight: 'bold' }} onPress={() => router.push('/login')}>
							Log in!
						</Text>
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	innerContainer: {
		paddingHorizontal: 12,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
