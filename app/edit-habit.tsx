import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import HabitForm from './components/ui/HabitForm';

export default function Edit() {
	return (
		<KeyboardAvoidingView style={styles.screenContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.titleContainer}>
					<TouchableOpacity onPress={() => router.back()}>
						<AntDesign name="back" size={24} color="black" />
					</TouchableOpacity>
					<Text style={styles.title}>Edit Habit</Text>
				</View>
				<HabitForm onSubmit={() => {}} />
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
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
});
