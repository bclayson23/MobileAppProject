import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { MovieProvider } from '../data/MovieContext';

export default function Layout() {
  return (
    <MovieProvider>
      <Tabs
        screenOptions={{
          headerTitle: () => null,

          headerStyle: {
            height: 80,
          },

          headerBackground: () => (
            <View style={{ flex: 1 }}>
              <ImageBackground
                source={require('../assets/header-bg.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              >
                <View
                  style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                  }}
                />
              </ImageBackground>
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'My Movies',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'film' : 'film-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="add"
          options={{
            title: 'Add a Movie',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'add-circle' : 'add-circle-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="wishlist"
          options={{
            title: 'Wishlist',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </MovieProvider>
  );
}