import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

import Principal from "./paginas/Principal";
import Repositorios from "./paginas/Repositorios";
import CriarRepositorio from "./paginas/CriarRepositorio";
import InfoRepositorio from "./paginas/InfoRepositorio";

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Principal"
          options={{ title: "Perfil", headerTitleAlign: "center" }}
          component={Principal}
        />
        <Tab.Screen
          name="Repositorios"
          component={Repositorios}
          options={{ title: "Repositório", headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="CriarRepositorio"
          options={{ title: "Criar Repositório", headerTitleAlign: "center" }}
          component={CriarRepositorio}
        />
        <Tab.Screen
          name="InfoRepositorio"
          options={{ title: "Repositório Info", headerTitleAlign: "center" }}
          component={InfoRepositorio}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
