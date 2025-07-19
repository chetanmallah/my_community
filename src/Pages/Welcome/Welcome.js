import {Text, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"



const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>Welcome screen</Text>
            <Button title="go to homepage" onPress={()=> navigation.navigate("TabNavigator")} />
        </SafeAreaView>
    )
}
export default Welcome