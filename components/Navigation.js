import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator
    barStyle= {{backgroundColor: '#fff', borderColor: '#000'}}
    >
      <Tab.Screen name="Generador" component={HomeScreen}
      options={{
        tabBarLabel: 'Generador',
        tabBarIcon: () => (
          <MaterialCommunityIcons name='clipboard-edit-outline' size={26} />
        ) 
      }}
      />
      <Tab.Screen name="Historial" component={DetailsScreen}
           options={{
            tabBarLabel: 'Historial',
            tabBarIcon: () => (
              <MaterialCommunityIcons name='history' size={26} />
            ) 
          }}
      
      
      />
    </Tab.Navigator>
  );
}

export default Navigation;
