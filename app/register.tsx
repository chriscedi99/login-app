import { Button, Layout, Text } from "@ui-kitten/components";
import { router } from "expo-router";

export default function Register() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          paddingBottom: 10,
          color: "#3498db",
        }}
      >
        Registro
      </Text>
      <Layout style={{ justifyContent: "center", flexDirection: "row" }}>
        <Text>¿Ya tienes una cuenta? Inicia</Text>
        <Text style={{ color: "blue" }} onPress={() => router.push("/sign-in")}>
          {" "}
          aquí
        </Text>
      </Layout>
    </Layout>
  );
}
