// ============================================
// app/(tabs)/_layout.jsx
// ============================================
import { Tabs } from 'expo-router'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from '@/components/ui/Icon'
import { LinearGradient } from 'expo-linear-gradient'

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index
          
          const label = route.name === 'home' ? 'Accueil'
            : route.name === 'access' ? 'Accès'
            : route.name === 'progress' ? 'Progrès'
            : 'Profil'
          
          const iconName = route.name

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

           return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={styles.tab}
            >
              {isFocused ? (
                <LinearGradient
                  colors={["#615FFF", "#9810FA"]}
                  style={styles.tabActive}
                >
                  <Icon 
                    name={iconName} 
                    size={20} 
                    color="#FFF"
                  />
                  <Text style={styles.labelActive}>
                    {label}
                  </Text>
                </LinearGradient>
              ) : (
                <View style={styles.tabInactive}>
                  <Icon 
                    name={iconName} 
                    size={20} 
                    color="#6B7280"
                  />
                  <Text style={styles.label}>
                    {label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="access" />
      <Tabs.Screen name="progress" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
   tab: {
    flex: 1,
  },
  tabActive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
  },
  tabInactive: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 14,
  },
  label: {
    fontSize: 11,
    marginTop: 4,
    color: '#6B7280',
    fontWeight: '500',
  },
  labelActive: {
    color: '#FFF',
    fontWeight: '500',
  },
})