import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const stackRoutes = createStackNavigator();

export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
  };

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator screenOptions={{
       cardStyle: {
           backgroundColor: colors.white
       }, 
       headerShown: false
    }}>

    <stackRoutes.Screen
    name="Welcome"
    component={Welcome}
    />

    <stackRoutes.Screen
    name="UserIdentification"
    component={UserIdentification}
    />

    <stackRoutes.Screen
    name="Confirmation"
    component={Confirmation}
    />

    <stackRoutes.Screen
    name="PlantSelect"
    component={PlantSelect}
    />
    
    </stackRoutes.Navigator>
)

export default AppRoutes;