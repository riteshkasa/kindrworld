import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MultiSelect } from 'react-native-element-dropdown';

// Define types for Tasks and Dropdown Options
interface Task {
  id: number;
  name: string;
  category: string;
  location: string;
}

interface DropdownOption {
  label: string;
  value: string;
}

// Sample Tasks Data
const TASKS: Task[] = [
  { id: 1, name: 'Clean up a park 🏞️', category: 'Environmental Conservation', location: 'Santa Monica' },
  { id: 2, name: 'Help at a food bank 🍎', category: 'Poverty Relief', location: 'Long Beach' },
  { id: 3, name: 'Tutor a student 📚', category: 'Education & Mentoring', location: 'Westwood' },
  { id: 4, name: 'Visit an elderly home ❤️', category: 'Elderly Support', location: 'Beverly Hills' },
  { id: 5, name: 'Volunteer at an animal shelter 🐶', category: 'Animal Welfare', location: 'Anaheim' },
];

// Dropdown Data
const places: DropdownOption[] = [
  { label: 'All', value: 'All' },
  { label: 'Westwood', value: 'Westwood' },
  { label: 'Santa Monica', value: 'Santa Monica' },
  { label: 'Beverly Hills', value: 'Beverly Hills' },
  { label: 'Long Beach', value: 'Long Beach' },
  { label: 'Culver City', value: 'Culver City' },
  { label: 'Anaheim', value: 'Anaheim' },
];

const categories: DropdownOption[] = [
  { label: 'All', value: 'All' },
  { label: 'Community Service', value: 'Community Service' },
  { label: 'Environmental Conservation', value: 'Environmental Conservation' },
  { label: 'Education & Mentoring', value: 'Education & Mentoring' },
  { label: 'Poverty Relief', value: 'Poverty Relief' },
  { label: 'Healthcare Support', value: 'Healthcare Support' },
  { label: 'Animal Welfare', value: 'Animal Welfare' },
  { label: 'Elderly Support', value: 'Elderly Support' },
];

const TaskFilterScreen: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>(['All']);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);

  // Filter Tasks Based on Selections
  const filteredTasks = TASKS.filter((task) => {
    const placeMatch = selectedPlaces.includes('All') || selectedPlaces.includes(task.location);
    const categoryMatch = selectedCategories.includes('All') || selectedCategories.includes(task.category);
    return placeMatch && categoryMatch;
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContent}>
          <View>
            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeText}>Volunteering Opportunities</Text>
              <Image 
                source={require('../../assets/images/kindrworld.png')}
                style={styles.logo}
              />
            </View>
          </View>
        </View>

        <Text style={styles.headerText}>Filter by Location</Text>
        <MultiSelect
          data={places}
          labelField="label"
          valueField="value"
          value={selectedPlaces}
          onChange={(selected) => setSelectedPlaces(selected)}
          placeholder="Select Places"
          style={styles.dropdown}
          selectedStyle={styles.selectedStyle}
        />

        <Text style={styles.headerText}>Filter by Category</Text>
        <MultiSelect
          data={categories}
          labelField="label"
          valueField="value"
          value={selectedCategories}
          onChange={(selected) => setSelectedCategories(selected)}
          placeholder="Select Categories"
          style={styles.dropdown}
          selectedStyle={styles.selectedStyle}
        />

        <Text style={styles.headerText}>Filtered Tasks</Text>
        <ScrollView style={styles.scrollableContainer}>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <View key={task.id} style={styles.task}>
                <Text style={styles.taskText}>{task.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noTasksText}>No tasks available.</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#68A678' },
  headerText: { fontSize: 16, fontWeight: 'bold', marginTop: 10, fontFamily: 'Cochin',},
  dropdown: { marginVertical: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, fontFamily: 'Cochin', padding: 10 },
  selectedStyle: { backgroundColor: '#f0f0f0', borderRadius: 5 },
  scrollableContainer: { marginTop: 10, maxHeight: 200 },
  task: { padding: 10, backgroundColor: '#e6f7ff', marginVertical: 5, borderRadius: 5 },
  taskText: { fontSize: 16, fontFamily: 'Cochin' },
  noTasksText: { textAlign: 'center', marginTop: 20, fontSize: 16, color: 'gray' },
  headerContent: {
    backgroundColor: '#002D04',
    borderRadius: 8,
    padding: 16,
  },
  welcomeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    color: 'white',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default TaskFilterScreen;