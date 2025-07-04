import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Habit() {
	const { id } = useLocalSearchParams();
	return (
		<ScrollView style={styles.screenContainer}>
			<View style={styles.titleContainer}>
				<TouchableOpacity onPress={() => router.back()}>
					<AntDesign name="back" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.title}>{id ?? ''}</Text>
			</View>
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
});
