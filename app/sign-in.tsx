import { router } from "expo-router";
import { Text, View } from "react-native";
import { useSession } from "@/context/ctx";
import { Layout, Input, Button } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { useWindowDimensions } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { height } = useWindowDimensions();
  const { signIn } = useSession();

  const onSubmit = () => {
    signIn();
    router.replace("/");
  };
  return (
    <Layout
      style={{
        flex: 1,
      }}
    >
      <ScrollView style={{ marginHorizontal: 30 }}>
        <Text
          style={{
            fontSize: 30,
            color: "#3498db",
            paddingBottom: 25,
            fontWeight: "700",
            paddingTop: height * 0.35,
          }}
        >
          Bienvenido
        </Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Usuario"
              placeholder="example@email.com"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={{ color: "red" }}>Campo requerido</Text>}

        <Layout style={{ marginBottom: 20 }} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        {errors.email && <Text style={{ color: "red" }}>Campo requerido</Text>}
        <Layout style={{ marginBottom: 20 }} />

        <Button onPress={handleSubmit(onSubmit)}>Entrar</Button>
        <Layout style={{ marginBottom: 20 }} />
        <Layout style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text>Si eres nuevo registrate</Text>
          <Text
            style={{ color: "blue" }}
            onPress={() => router.push("/register")}
          >
            {" "}
            aquí
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
}
