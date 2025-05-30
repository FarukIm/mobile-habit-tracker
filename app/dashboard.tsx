import { Link } from 'expo-router';
import { Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href="/profile"
        style={{
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#4f46e5',
          marginTop: 12,
        }}
      >
        <Text style={{ color: '#fff' }}>Go to Profile</Text>
      </Link>

      <Link
        href="/habit"
        style={{
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#4f46e5',
          marginTop: 12,
        }}
      >
        <Text style={{ color: '#fff' }}>Go to Habit</Text>
      </Link>

      <Link
        href="/create-habit"
        style={{
          padding: 12,
          borderRadius: 8,
          backgroundColor: '#4f46e5',
          marginTop: 12,
        }}
      >
        <Text style={{ color: '#fff' }}>Go to Create Habit</Text>
      </Link>

    </View>
  );
}
