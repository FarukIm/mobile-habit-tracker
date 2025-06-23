// libs
import { router } from 'expo-router';
import { useState } from 'react';
// theme
import theme from '@/theme';
// components
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

export default function Registration() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		alert(`Welcome, ${email}`);
		router.push('/dashboard');
	};

	return (
		<KeyboardAvoidingView style={styles.screenContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.innerContainer}>
					<Text style={{ fontSize: 26, fontWeight: 'bold', color: theme.colors.red }}>Log In</Text>
					<Input label="Email" placeholder="Email" value={email} setValue={setEmail} />

					<Input label="Password" placeholder="Password" value={password} setValue={setPassword} isSecure />

					<Button title="Log In" onPress={handleLogin} disabled={!email || !password} />

					<Text style={{ fontSize: 18 }}>
						Don&apos;t have an account?{' '}
						<Text style={{ color: theme.colors.red, fontWeight: 'bold' }} onPress={() => router.push('/registration')}>
							Sign Up!
						</Text>
					</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	screenContainer:{
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
	}
});
