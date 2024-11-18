import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home';
import Fotos from './pages/fotos';
import cadastro from './pages/cadastro';
import localizacao from './pages/localizacoa';

const Menu = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Menu.Navigator>
                <Menu.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Menu.Screen name="Fotos" component={Fotos} />
                <Menu.Screen name="cadastro" component={cadastro} />
                <Menu.Screen name="localizacao" component={localizacao} />
            </Menu.Navigator>
        </NavigationContainer>
    );
}

export default Routes;