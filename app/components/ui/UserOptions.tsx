import theme from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UserOptions() {
	const [menuVisible, setMenuVisible] = useState(false);
	const router = useRouter();

	const handleProfilePress = () => {
		router.push('/profile');
		setMenuVisible(false);
	};

	const handleLogoutPress = () => {
		setMenuVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.iconContainer} onPress={() => setMenuVisible(!menuVisible)}>
				<AntDesign name="user" size={24} color="black" />
			</TouchableOpacity>

			{menuVisible && (
				<View style={styles.menu}>
					<TouchableOpacity onPress={handleProfilePress} style={styles.menuItem}>
						<AntDesign name="profile" size={16} color="black" />
						<Text style={styles.menuText}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={handleLogoutPress} style={styles.menuItem}>
						<AntDesign name="logout" size={16} color="black" />
						<Text style={styles.menuText}>Log out</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	iconContainer: {
		padding: 5,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: theme.colors.dark,
	},
	menu: {
		position: 'absolute',
		top: 45,
		right: 10,
		backgroundColor: '#fff',
		width: 120,
		zIndex: 20,
		borderRadius: 8,
		elevation: 5,
		shadowColor: '#000',
		shadowOpacity: 0.3,
		shadowRadius: 5,
		shadowOffset: { width: 0, height: 2 },
	},
	menuItem: {
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	menuText: {
		fontSize: 16,
		fontWeight: 500,
	},
});
