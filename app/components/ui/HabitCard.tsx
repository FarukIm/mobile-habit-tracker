import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Variant = 'small' | 'large';
const SMALL: Variant = 'small';
const LARGE: Variant = 'large';

type CardProps = {
	title: string;
	time: string;
	description?: string;
  variant?: Variant;
	onCheckPress?: () => void;
};

const LargeCard = (title: string, time: string, description: string, onCheckPress: () => void) => {
	const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.card}>
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
		</View>
  )
};

const SmallCard = (title: string, time: string) => {
  return(
    <View style={styles.card}>
      <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  )
}

export default function HabitCard({ title, time, description, variant=SMALL, onCheckPress }: CardProps) {

	return 	variant === SMALL ? SmallCard(title, time) : LargeCard(title, time, description="", onCheckPress= () => {});
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
