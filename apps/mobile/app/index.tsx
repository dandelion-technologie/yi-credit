import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yi Credit Mobile</Text>
      <Text style={styles.subtitle}>Expo app sharing config from the Turborepo</Text>
      <Link href="/" style={styles.link}>
        Open web app
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    paddingHorizontal: 24,
    gap: 12
  },
  title: {
    fontSize: 28,
    color: "#e2e8f0",
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 16,
    color: "#cbd5e1",
    textAlign: "center"
  },
  link: {
    color: "#60a5fa",
    fontWeight: "600",
    fontSize: 16
  }
});
