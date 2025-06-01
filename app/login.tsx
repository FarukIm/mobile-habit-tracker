// libs
import { router } from 'expo-router';
import { useState } from 'react';
// theme
import theme from '@/theme';
// components
import { SafeAreaView, Text } from 'react-native';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

export default function Registration() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<SafeAreaView style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', gap: 20 }}>
			<Text style={{ fontSize: 26, marginBottom: 20, fontWeight: 'bold', color: theme.colors.red }}>Log In</Text>
			<Input
        label="Email"
				placeholder="Email"
				value={email}
				setValue={setEmail}
			/>

      <Input
        label="Password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
        isSecure
      />
        
			<Button title="Log In" onPress={() => alert(`Welcome, ${email}`)} disabled={!email || !password} />

			<Text style={{ fontSize: 18 }}>
				Don&apos;t have an account?{' '}
				<Text style={{ color: theme.colors.red, fontWeight: 'bold' }} onPress={() => router.push('/registration')}>
					Sign Up!
				</Text>
			</Text>
		</SafeAreaView>
	);
}
