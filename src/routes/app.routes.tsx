import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "@/screens/todolist";
import Home from "@/screens/home";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="todolist" component={TodoList} />
    </Navigator>
  );
};
