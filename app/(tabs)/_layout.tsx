import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#68A678",
        tabBarStyle: {
          backgroundColor: '#002D04',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" color={color} size={28}/>,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Discussion',
          tabBarIcon: ({ color }) => <Octicons name="comment-discussion" color={color} size={28}/>,
        }}
      />
    </Tabs>
  );
}
