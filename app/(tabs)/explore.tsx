import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MultiSelect } from 'react-native-element-dropdown';

// Define types for Volunteer Opportunities and Dropdown Options
interface VolunteerOpportunity {
  id: number;
  title: string;
  location: string;
  category: string;
  tags: string[];
  description: string;
  link: string;
}

interface DropdownOption {
  label: string;
  value: string;
}

// Define the actual places and categories (excluding "All")
const actualPlaces = ['Westwood', 'Santa Monica', 'Beverly Hills', 'Long Beach', 'Anaheim'];
const actualCategories = [
  'Community Service',
  'Environmental Conservation',
  'Education & Mentoring',
  'Poverty Relief',
  'Healthcare Support',
  'Animal Welfare',
  'Elderly Support',
];

// Dynamically generate 3 volunteer opportunities per combination of place and category
const VOLUNTEER_OPPORTUNITIES: VolunteerOpportunity[] = [];
let idCounter = 1;

for (const place of actualPlaces) {
  for (const category of actualCategories) {
    // Build the search query by combining category and place.
    const query = encodeURIComponent(`${category} ${place}`);
    // Opportunity from VolunteerMatch
    VOLUNTEER_OPPORTUNITIES.push({
      id: idCounter++,
      title: `${category} Opportunity in ${place} - VolunteerMatch`,
      location: `${place}, CA`,
      category,
      tags: [category.replace(/\s/g, '').toLowerCase(), place.replace(/\s/g, '').toLowerCase()],
      description: `Explore volunteer opportunities in ${place} for ${category} on VolunteerMatch.`,
      link: `https://www.volunteermatch.org/search/?query=${query}`,
    });
    // Opportunity from All For Good
    VOLUNTEER_OPPORTUNITIES.push({
      id: idCounter++,
      title: `${category} Opportunity in ${place} - AllForGood`,
      location: `${place}, CA`,
      category,
      tags: [category.replace(/\s/g, '').toLowerCase(), place.replace(/\s/g, '').toLowerCase()],
      description: `Discover ${category.toLowerCase()} volunteer opportunities in ${place} via All For Good.`,
      link: `https://www.allforgood.org/search?q=${query}`,
    });
    // Opportunity from Idealist
    VOLUNTEER_OPPORTUNITIES.push({
      id: idCounter++,
      title: `${category} Opportunity in ${place} - Idealist`,
      location: `${place}, CA`,
      category,
      tags: [category.replace(/\s/g, '').toLowerCase(), place.replace(/\s/g, '').toLowerCase()],
      description: `Find ideal volunteer openings in ${place} for ${category} on Idealist.`,
      link: `https://www.idealist.org/en/volunteer-opportunities?query=${query}`,
    });
  }
}

// Dropdown Data including "All" option
const places: DropdownOption[] = [
  { label: 'All', value: 'All' },
  ...actualPlaces.map(place => ({ label: place, value: place })),
];

const categories: DropdownOption[] = [
  { label: 'All', value: 'All' },
  ...actualCategories.map(category => ({ label: category, value: category })),
];

const TaskFilterScreen: React.FC = () => {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Filter opportunities based on selected place(s) and category(ies)
  const filteredOpportunities = VOLUNTEER_OPPORTUNITIES.filter((opportunity) => {
    const placeMatch =
      selectedPlaces.length === 0 ||
      selectedPlaces.includes('All') ||
      selectedPlaces.includes(opportunity.location.split(',')[0]);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes('All') ||
      selectedCategories.includes(opportunity.category);
    return placeMatch && categoryMatch;
  });

  // Open the volunteer opportunity link in the device's browser
  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Filter by Location</Text>
        <MultiSelect
          data={places}
          labelField="label"
          valueField="value"
          value={selectedPlaces}
          onChange={(selected) =>
            setSelectedPlaces(selected)
          }
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
          onChange={(selected) =>
            setSelectedCategories(selected)
          }
          placeholder="Select Categories"
          style={styles.dropdown}
          selectedStyle={styles.selectedStyle}
        />

        <Text style={styles.headerText}>Filtered Volunteer Opportunities</Text>
        <ScrollView style={styles.scrollableContainer}>
          {filteredOpportunities.length > 0 ? (
            filteredOpportunities.map((opportunity) => (
              <View key={opportunity.id} style={styles.opportunity}>
                <Text style={styles.titleText}>{opportunity.title}</Text>
                <Text style={styles.locationText}>{opportunity.location}</Text>
                <Text style={styles.descriptionText}>{opportunity.description}</Text>
                <Text style={styles.tagsText}>
                  Tags: {opportunity.tags.join(', ')}
                </Text>
                <TouchableOpacity onPress={() => handleLinkPress(opportunity.link)}>
                  <Text style={styles.linkText}>View Opportunity</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text style={styles.noOpportunitiesText}>
              No opportunities available.
            </Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#68A678' },
  headerText: { fontSize: 20, fontFamily: 'Cochin', fontWeight: 'bold', marginTop: 10, color: 'white' },
  dropdown: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  selectedStyle: { backgroundColor: '#f0f0f0', borderRadius: 5 },
  scrollableContainer: { marginTop: 10, maxHeight: 300 },
  opportunity: {
    padding: 10,
    backgroundColor: '#e6f7ff',
    marginVertical: 5,
    borderRadius: 5,
  },
  titleText: { fontSize: 18, fontWeight: 'bold' },
  locationText: { fontSize: 14, color: 'gray' },
  descriptionText: { fontSize: 14, marginVertical: 5 },
  tagsText: { fontSize: 12, color: 'blue' },
  linkText: {
    fontSize: 14,
    color: 'green',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  noOpportunitiesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default TaskFilterScreen;