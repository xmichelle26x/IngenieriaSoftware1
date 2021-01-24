import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import TipoCarroS1 from "../screens/TipoCarroS1";
import Home from "../screens/Home";
import tipoLavado from "../screens/tipoLavado";
import Schedule from "../screens/Schedule";
import Login from "../screens/Login";
import Payment from "../screens/Payment";
const screens={
    Home:{
        screen: Home
    },
    TipoCarro:{
        screen: TipoCarroS1
    },
    TipoLavado:{
        screen:tipoLavado
    },
    Schedule:{
        screen:Schedule
    },
    Login:{
        screen: Login
    },
    Payment:{
       screen:Payment
    },
    

    
    
    

}
const stackS1=createStackNavigator(screens);
export default createAppContainer(stackS1);