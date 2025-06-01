import theme from '@/theme';
import { Pressable, Text, View } from 'react-native';

type ButtonProps = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
};

export default function Button({ title, onPress, disabled }: ButtonProps) {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				borderWidth: 1,
				borderColor: disabled ? theme.colors.light : theme.colors.cyan,
				borderRadius: 8,
			}}>
			<Pressable
				onPress={onPress}
				disabled={disabled}
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					backgroundColor: disabled ? theme.colors.gray : theme.colors.blue,
					padding: 10,
					borderRadius: 8,
				}}>
				<Text style={{ fontSize: 16, color: disabled ? theme.colors.dark : theme.colors.light, fontWeight: 'bold' }}>
					{title}
				</Text>
			</Pressable>
		</View>
	);
}
