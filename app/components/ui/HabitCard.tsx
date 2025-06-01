import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Variant = 'small' | 'large';
const SMALL: Variant = 'small';
const LARGE: Variant = 'large';

type CardProps = {
	id: number;
	title: string;
	time: string;
	description?: string;
	variant?: Variant;
	onCheckPress?: () => void;
};

const LargeCard = (id: number, title: string, time: string, description: string, onCheckPress: () => void) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: `/habit`, params: { id: id } })}>
			<View style={styles.header}>
				<View>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.time}>{time}</Text>
				</View>
				<TouchableOpacity onPress={onCheckPress}>
					<AntDesign name="check" size={24} color={theme.colors.green} />
				</TouchableOpacity>
			</View>
			<TouchableOpacity onPress={() => setExpanded(!expanded)}>
				<Text style={styles.description} numberOfLines={expanded ? undefined : 2}>
					{description}
				</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
};

const SmallCard = (id: number, title: string, time: string) => {
	return (
		<TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: `/habit`, params: { id } })}>
			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.time}>{time}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default function HabitCard({ id, title, time, description = '', variant = SMALL, onCheckPress }: CardProps) {
	return variant === SMALL
		? SmallCard(id, title, time)
		: LargeCard(id, title, time, description, (onCheckPress = () => {}));
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 16,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	time: {
		fontSize: 14,
		color: 'gray',
	},
	description: {
		fontSize: 16,
		color: 'black',
	},
});
