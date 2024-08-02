import { View } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { useSession } from "@/context/ctx";
import { router } from "expo-router";

export default function Index() {
  const { signOut } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          paddingBottom: 20,
          color: "#3498db",
        }}
      >
        Home
      </Text>
      <Button onPress={() => router.push("/products")}>Ver productos</Button>
      <Text
        style={{ marginTop: 30 }}
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
