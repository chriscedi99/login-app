import { Button, Layout, Text } from "@ui-kitten/components";
import { router } from "expo-router";

export default function ProductsScreen() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          color: "#3498db",
          paddingBottom: 20,
        }}
      >
        Products
      </Text>
      <Button onPress={() => router.back()}>Regresar a home</Button>
    </Layout>
  );
}
