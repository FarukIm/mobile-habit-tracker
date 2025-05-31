// libs
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
// theme
import theme from '@/theme';
// components
import { SafeAreaView, Text } from 'react-native';
import Button from './components/ui/Button';
import CustomTextInput from './components/ui/CustomTextInput';

export default function Registration() {
	const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    }
  }, [confirmPassword]);

	return (
		<SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
			<Text style={{ fontSize: 26, marginBottom: 20, fontWeight: 'bold', color: theme.colors.red }}>Register</Text>
			<CustomTextInput
        label="Email"
				placeholder="Email"
				value={email}
				setValue={setUsername}
			/>

      <CustomTextInput
        label="Username"
        placeholder="Username"
        value={username}
        setValue={setEmail}
      />

      <CustomTextInput
        label="Password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
        isSecure
      />

      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm Password"
        value={confirmPassword}
        setValue={setConfirmPassword}
        isSecure
      />
        
			<Button title="Sign up" onPress={() => alert(`Welcome, ${email}`)} />

			<Text style={{ fontSize: 18 }}>
				Already have an account?{' '}
				<Text style={{ color: theme.colors.red, fontWeight: 'bold' }} onPress={() => router.push('/login')}>
					Log in!
				</Text>
			</Text>
		</SafeAreaView>
	);
}
