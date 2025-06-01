// libs
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
// enums
import { InputTypes } from '@/app/types/enums/input';
// theme
import theme from '@/theme';
// components
import { SafeAreaView, Text } from 'react-native';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
	const [email, setEmail] = useState('');
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

      <Input
        label="Username"
        placeholder="Username"
        value={username}
        setValue={setEmail}
      />

			<Input
        label="Email"
				placeholder="Email"
				value={email}
				setValue={setUsername}
			/>

      <Input
        label="Birthdate"
        placeholder="Birthdate"
        type={InputTypes.DATE}
        value={birthdate}
        setValue={setBirthdate}
      />

      <Input
        label="Password"
        placeholder="Password"
        value={password}
        setValue={setPassword}
        isSecure
      />

      <Input
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
