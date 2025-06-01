// libs
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, CalendarProvider, ExpandableCalendar } from 'react-native-calendars';
import { ScrollView } from 'react-native-gesture-handler';
// theme
import theme from '@/theme';
// components
import HabitCard from './components/ui/HabitCard';
import UserOptions from './components/ui/UserOptions';

export default function Dashboard() {
	const [selected, setSelected] = useState(new Date().toISOString().split('T')[0]);
	const [viewType, setViewType] = useState('monthly');

	return (
		<ScrollView style={styles.screenContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Dashboard</Text>
				<UserOptions />
			</View>

			<View style={{ ...styles.habitsContainer, backgroundColor: theme.colors.lightBlue }}>
				<View style={styles.habitsTitleContainer}>
					<Text style={styles.activeHabitsLabel}>Today</Text>
					<TouchableOpacity style={styles.addHabitButton} onPress={() => router.push('/create-habit')}>
						<AntDesign name="pluscircleo" size={16} color={theme.colors.dark} />
						<Text style={styles.addHabitLabel}>Add</Text>
					</TouchableOpacity>
				</View>
				<HabitCard
					id={1}
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
				<HabitCard
					id={2}
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
				<HabitCard
					id={3}
					variant="large"
					title="Habit 1"
					time="9:00 AM"
					description="Description for Habit 1 Description for Habit 1 "
					onCheckPress={() => {}}
				/>
			</View>

			<View style={styles.viewToggleContainer}>
				<TouchableOpacity
					style={[styles.viewToggleButton, viewType === 'monthly' && styles.activeViewButton]}
					onPress={() => setViewType('monthly')}>
					<Text style={styles.viewToggleText}>Monthly</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.viewToggleButton, viewType === 'weekly' && styles.activeViewButton]}
					onPress={() => setViewType('weekly')}>
					<Text style={styles.viewToggleText}>Weekly</Text>
				</TouchableOpacity>
			</View>

			{viewType === 'monthly' ? (
				<Calendar
					current={selected}
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
			) : (
				<CalendarProvider
					date={selected}
					onDateChanged={(date) => setSelected(date)}
					showTodayButton
					disabledOpacity={0.6}>
					<ExpandableCalendar
						onDayPress={(day) => setSelected(day.dateString)}
						firstDay={0}
						hideKnob
						disablePan
						disableWeekScroll
						closeOnDayPress={false}
						style={styles.calendar}
						markedDates={{
							[selected]: {
								selected: true,
								selectedColor: theme.colors.pink,
								selectedTextColor: theme.colors.dark,
							},
						}}
						theme={{
							todayTextColor: theme.colors.cyan,
							selectedDayBackgroundColor: theme.colors.pink,
							selectedDayTextColor: theme.colors.dark,
						}}
					/>
				</CalendarProvider>
			)}

			<View style={{ ...styles.habitsContainer, backgroundColor: theme.colors.pink, marginBottom: 50 }}>
				<View style={styles.habitsTitleContainer}>
					<Text style={styles.activeHabitsLabel}>{selected}</Text>
					<TouchableOpacity style={styles.addHabitButton} onPress={() => router.push('/create-habit')}>
						<AntDesign name="pluscircleo" size={16} color={theme.colors.dark} />
						<Text style={styles.addHabitLabel}>Add</Text>
					</TouchableOpacity>
				</View>
				<HabitCard id={4} title="Habit 1" time="9:00 AM" />
				<HabitCard id={5} title="Habit 1" time="9:00 AM" />
				<HabitCard id={6} title="Habit 1" time="9:00 AM" />
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
		color: theme.colors.red,
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
		paddingBottom: 6,
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
	calendarContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginTop: 20,
	},
	calendar: {
		borderEndEndRadius: 8,
		borderStartEndRadius: 8,
		elevation: 0,
		shadowColor: 'transparent',
		borderWidth: 0,
	},
	viewToggleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: 20,
		backgroundColor: 'white',
		padding: 10,
		borderStartStartRadius: 8,
		borderEndStartRadius: 8,
	},
	viewToggleButton: {
		width: '50%',
		padding: 10,
		marginHorizontal: 5,
		borderRadius: 8,
		backgroundColor: theme.colors.light,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	activeViewButton: {
		backgroundColor: theme.colors.cyan,
	},
	viewToggleText: {
		fontSize: 16,
		fontWeight: 500,
	},
});
