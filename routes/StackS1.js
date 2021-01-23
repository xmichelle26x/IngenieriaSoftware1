import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import TipoCarroS1 from "../screens/TipoCarroS1";
import Home from "../screens/Home";
const screens={
    Home:{
        screen: Home
    },
    TipoCarro:{
        screen: TipoCarroS1
    },

}
const stackS1=createStackNavigator(screens);
export default createAppContainer(stackS1);