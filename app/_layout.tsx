import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		<Stack
			initialRouteName="login"
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="dashboard" />
			<Stack.Screen name="profile" />
			<Stack.Screen name="habit" />
			<Stack.Screen name="create-habit" />
			<Stack.Screen name="login" />
			<Stack.Screen name="registration" />
		</Stack>
	);
}
