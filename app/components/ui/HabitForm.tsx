// libs
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
// theme
import theme from '@/theme';
// components
import Button from './Button';
import Input from './Input';

interface WeekdayOption {
	id: number;
	label: string;
}

interface HabitFormProps {
	onSubmit: (habit: Habit) => void;
	initialValues?: Habit;
}

interface Habit {
	title?: string;
	description?: string;
	tags?: string[];
	weekdays?: number[];
	time?: string;
}

const weekdaysOptions: WeekdayOption[] = [
	{ id: 1, label: 'Monday' },
	{ id: 2, label: 'Tuesday' },
	{ id: 3, label: 'Wednesday' },
	{ id: 4, label: 'Thursday' },
	{ id: 5, label: 'Friday' },
	{ id: 6, label: 'Saturday' },
	{ id: 7, label: 'Sunday' },
];

export default function HabitForm({ onSubmit, initialValues = {} }: HabitFormProps) {
	const [title, setTitle] = useState<string>(initialValues.title || '');
	const [description, setDescription] = useState<string>(initialValues.description || '');
	const [weekdays, setWeekdays] = useState<number[]>(initialValues.weekdays || []);
	const [time, setTime] = useState<string>(initialValues.time || '');
	const [isTimePickerVisible, setTimePickerVisibility] = useState<boolean>(false);
	const [tags, setTags] = useState<string[]>(initialValues.tags || []);
	const [newTag, setNewTag] = useState<string>('');

	const handleConfirm = (selectedTime: Date) => {
		setTime(selectedTime.toTimeString().slice(0, 5)); // HH:MM format
		setTimePickerVisibility(false);
	};

	const toggleWeekday = (id: number) => {
		if (weekdays.includes(id)) {
			setWeekdays(weekdays.filter((dayId) => dayId !== id));
		} else {
			setWeekdays([...weekdays, id]);
		}
	};

	const handleAddTag = () => {
		if (newTag.trim() !== '') {
			setTags([...tags, newTag.trim()]);
			setNewTag('');
		}
	};

	const handleRemoveTag = (tagToRemove: string) => {
		setTags(tags.filter((tag) => tag !== tagToRemove));
	};

	const handleSubmit = () => {
		const habit: Habit = { title, description, weekdays, time, tags };
		onSubmit(habit);
	};

	return (
		<View>
			<View style={styles.container}>
				<Input label="Title" value={title} setValue={setTitle} />

				<Input label="Description" multiline={true} value={description} setValue={setDescription} />

				<View style={{ width: '100%' }}>
					<Text style={styles.label}>Tags</Text>
					<View style={styles.tagsContainer}>
						{tags.map((tag) => (
							<View key={tag} style={styles.tag}>
								<Text style={styles.tagText}>{tag}</Text>
								<TouchableOpacity onPress={() => handleRemoveTag(tag)}>
									<AntDesign name="delete" size={16} color={theme.colors.red} />
								</TouchableOpacity>
							</View>
						))}
					</View>
					<View style={styles.addTagContainer}>
						<View style={styles.tagInputContainer}>
							<Input value={newTag} setValue={setNewTag} placeholder="Add a tag" />
						</View>
						<TouchableOpacity onPress={handleAddTag} style={styles.addTagButton}>
							<AntDesign name="plus" size={24} color="white" />
						</TouchableOpacity>
					</View>
				</View>

				<Text style={styles.label}>Repeat on</Text>
				<View style={styles.weekdaysContainer}>
					{weekdaysOptions.map(({ id, label }) => (
						<TouchableOpacity
							key={id}
							style={[styles.weekdayButton, weekdays.includes(id) && styles.selectedWeekdayButton]}
							onPress={() => toggleWeekday(id)}>
							<Text style={[styles.weekdayText, weekdays.includes(id) && styles.selectedWeekdayText]}>{label}</Text>
						</TouchableOpacity>
					))}
				</View>

				<Text style={styles.label}>Time</Text>

				<TouchableOpacity onPress={() => setTimePickerVisibility(true)} style={styles.timePickerContainer}>
					<View style={styles.timePicker}>
						<Text>{time || 'Select Time'}</Text>
					</View>
				</TouchableOpacity>

				<DateTimePickerModal
					isVisible={isTimePickerVisible}
					mode="time"
					onConfirm={handleConfirm}
					onCancel={() => setTimePickerVisibility(false)}
				/>
			</View>

			<View style={{ marginTop: 20 }}>
				<Button title="Submit" onPress={handleSubmit} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginTop: 20,
	},
	label: {
		marginBottom: 2,
		fontSize: 18,
		fontWeight: 'bold',
		color: theme.colors.dark,
		paddingLeft: 10,
	},
	weekdaysContainer: {
		flexDirection: 'row',
		gap: 10,
		flexWrap: 'wrap',
	},
	weekdayButton: {
		padding: 10,
		borderWidth: 1,
		borderColor: theme.colors.gray,
		borderRadius: 5,
	},
	selectedWeekdayButton: {
		borderWidth: 2,
		borderColor: theme.colors.red,
	},
	weekdayText: {
		fontWeight: '600',
		color: 'black',
	},
	selectedWeekdayText: {
		color: 'black',
	},
	timePickerContainer: {
		borderWidth: 2,
		borderColor: theme.colors.gray,
		borderRadius: 6,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	timePicker: {
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: '100%',
		fontSize: 18,
		color: theme.colors.dark,
		margin: 0,
	},
	tagsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: 10,
	},
	tag: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.colors.lightBlue,
		padding: 10,
		borderRadius: 5,
		gap: 5,
	},
	tagText: {
		color: theme.colors.dark,
		fontWeight: 500,
	},
	removeTagButton: {
		marginLeft: 5,
		color: theme.colors.red,
	},
	addTagContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		marginTop: 10,
	},
	tagInputContainer: {
		flex: 1,
	},
	addTagButton: {
		marginLeft: 10,
		backgroundColor: theme.colors.blue,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 5,
	},
});
