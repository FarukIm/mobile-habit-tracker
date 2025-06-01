import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
import HabitCard from './components/ui/HabitCard';

export default function Dashboard() {
	const [selected, setSelected] = useState('');

	return (
		<ScrollView style={styles.screenContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Dashboard</Text>

				<TouchableOpacity style={styles.profileContainer}>
					<AntDesign name="user" size={24} color="black" />
				</TouchableOpacity>
			</View>

			<View style={{ ...styles.habitsContainer, backgroundColor: theme.colors.lightBlue }}>
				<View style={styles.habitsTitleContainer}>
					<Text style={styles.activeHabitsLabel}>Today</Text>
					<TouchableOpacity style={styles.addHabitButton}>
						<AntDesign name="pluscircleo" size={16} color={theme.colors.dark} />
						<Text style={styles.addHabitLabel}>Add</Text>
					</TouchableOpacity>
				</View>
				<HabitCard
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
				<HabitCard
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
				<HabitCard
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
			</View>
			<Calendar
				onDayPress={(day) => {
					setSelected(day.dateString);
				}}
				markedDates={{
					[selected]: {
						selected: true,
						disableTouchEvent: true,
						selectedColor: theme.colors.yellow,
						selectedTextColor: theme.colors.dark,
					},
				}}
				style={styles.calendar}
			/>

			<View style={{ ...styles.habitsContainer, backgroundColor: theme.colors.lightYellow, marginBottom: 50 }}>
        <View style={styles.habitsTitleContainer}>
				<Text style={styles.activeHabitsLabel}>April 23 2025</Text>
					<TouchableOpacity style={styles.addHabitButton}>
						<AntDesign name="pluscircleo" size={16} color={theme.colors.dark} />
						<Text style={styles.addHabitLabel}>Add</Text>
					</TouchableOpacity>
				</View>
				<HabitCard title="Habit 1" time="9:00 AM" />
				<HabitCard title="Habit 1" time="9:00 AM" />
				<HabitCard title="Habit 1" time="9:00 AM" />
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
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 50,

		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: theme.colors.dark,
	},
	profileContainer: {
		padding: 5,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: theme.colors.dark,
	},
	habitsContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 8,
		marginTop: 20,
		padding: 10,
		borderRadius: 8,
	},
  habitsTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.gray,
		marginBottom: 4,
    paddingBottom: 6
  },
  addHabitButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colors.gray,
    backgroundColor: 'white',
  },
  addHabitLabel: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black', 
  },
	activeHabitsLabel: {
		fontSize: 20,
		fontWeight: 'bold',
		color: theme.colors.dark,
	},
	calendar: {
		width: '100%',
		height: 400,
		marginTop: 20,
		borderRadius: 8,
	},
});
