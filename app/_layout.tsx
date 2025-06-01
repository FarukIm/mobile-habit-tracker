import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Stack
				initialRouteName="dashboard"
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
		</GestureHandlerRootView>
	);
}
