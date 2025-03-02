import { Image, StyleSheet, Platform, StatusBar, SectionList } from 'react-native';
import {Button, View, Text, Alert, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, {useState} from 'react';

const TASKS = [
  'Hold the door open for someone',
  'Give a genuine compliment',
  'Pick up one piece of litter',
  'Let someone go ahead in line',
  'Send a "just thinking of you" message',
  'Smile at a stranger',
  'Say thank you with eye contact',
  'Write a positive review for a local business',
  'Offer your seat on public transport',
  'Recycle one item today',
  'Help someone carry something heavy',
  'Return a misplaced shopping cart',
  'Wave and say hi to a neighbor',
  'Share your umbrella in the rain',
  'Donate spare change to a charity jar',
  'Encourage someone who seems down',
  'Hold the elevator for someone',
  'Give an extra tip to a service worker',
  'Share a helpful resource online',
  'Let a car merge in front of you',
  'Say "Good morning" to a stranger',
  'Write a thank-you note to a teacher or mentor',
  'Share an inspirational post on social media',
  'Bring an extra snack to share',
  'Water a thirsty plant in a public space',
  'Turn off lights in empty rooms',
  'Help someone find something they dropped',
  'Offer directions to someone who looks lost',
  'Leave a positive sticky note in a public place',
  'Check in on an elderly neighbor',
  'Help a parent struggling with a stroller',
  'Hold back from honking in traffic',
  'Write a kind comment on a social media post',
  'Pick up a fallen bike or scooter',
  'Leave a book in a little free library',
  'Tell a coworker they’re doing a great job',
  'Share your Wi-Fi hotspot with someone in need',
  'Help a friend with a small task',
  'Encourage someone pursuing a goal',
  'Refill the printer paper at work or school',
  'Offer your shopping cart to someone else',
  'Give your pet some extra love today',
  'Turn in a lost item to the lost and found',
  'Let someone have the last piece of something',
  'Give a heartfelt apology if you need to',
  'Offer to take a photo for a group',
  'Help someone reach an item on a high shelf',
  'Greet the cashier with a smile',
  'Share your notes with a classmate',
  'Remind someone to drink water',
  'Give your spot in line to someone in a rush',
  'Thank a janitor or maintenance worker',
  'Offer to babysit for free',
  'Let someone borrow a charger',
  'Say "excuse me" and be polite in crowds',
  'Turn off someone’s forgotten car headlights',
  'Write a quick gratitude list',
  'Check in on a friend who had a tough day',
  'Listen fully without interrupting',
  'Tell a joke to lighten someone’s mood',
  'Offer your phone for an important call',
  'Suggest a fun activity to a lonely friend',
  'Send a positive email at work or school',
  'Put coins in an expired parking meter',
  'Share your knowledge with someone struggling',
  'Leave a nice tip on a bill',
  'Thank a bus driver or taxi driver',
  'Give a like or boost to a small creator',
  'Help someone load their groceries',
  'Offer gum or mints to a friend',
  'Share an extra napkin or tissue',
  'Recommend a good book to someone',
  'Hold a package delivery for a neighbor',
  'Help someone set up their tech device',
  'Let a child have the better view',
  'Say "Have a great day!" with sincerity',
  'Donate a can of food to a pantry',
  'Put your phone away in a conversation',
  'Help a tourist with directions',
  'Compliment a coworker’s effort',
  'Give a thumbs up to a street performer',
  'Send a supportive message to a creator',
  'Wish someone a happy birthday early',
  'Listen to someone’s story without judgment',
  'Pause and let someone cross the street',
  'Help clean up after a group event',
  'Recommend a helpful app or tool',
  'Help someone organize their things',
  'Share a kind memory about someone',
  'Make space for someone to sit',
  'Write a note of encouragement for yourself',
  'Pass on an extra coupon to someone',
  'Share your meal with someone in need',
  'Help a pet owner with their leash or bags',
  'Take a moment to breathe and be kind',
  'Encourage someone trying something new',
  'Be patient in a slow-moving line',
  'Remind someone they are appreciated',
  'Leave a kind note on a coworker’s desk',
  'Tell someone they inspired you',
  'Make someone laugh today'
];

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

var arr = [];
while(arr.length < 4){
    var r = Math.floor(Math.random() * TASKS.length) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}

const task1 = TASKS[arr[0]];
const task2 = TASKS[arr[1]];
const task3 = TASKS[arr[2]];
const task4 = TASKS[arr[3]];


export default function HomeScreen() {
  const [userTask, setText] = useState('');




  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.taskContainer}>

        {/* Header */}
        <View style={styles.headerContent}>
          <View>
            <View style={styles.welcomeContent}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.baseText}>{formattedDate}</Text>
            </View>
            <Text style={styles.baseText}>Help Build a KindrWorld</Text>
            {/* <Image 
              source={require('../../assets/images/Blink Logo.png')}
              style={styles.logo}
            /> */}
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.taskContainer}>
          <Text style={styles.titleText}>Daily Generated Tasks</Text>
          <View style={styles.task}>
            <Text style={styles.baseText}>{task1}</Text>
          </View>
          <View style={styles.task}>
            <Text style={styles.baseText}>{task2}</Text>
          </View>
          <View style={styles.task}>
            <Text style={styles.baseText}>{task3}</Text>
          </View>
          <View style={styles.task}>
            <Text style={styles.baseText}>{task4}</Text>
          </View>
          <Text style={styles.titleText}>Create your own Task!</Text>
            <View style={styles.task}>
              <TextInput
                style={styles.baseText}
                placeholder="Type Here"
                placeholderTextColor="gray"
                onChangeText={userTask => setText(userTask)}
              />
          </View>
        </View>        
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  task: {
    width: 250,
    backgroundColor: '#002D04', 
    borderRadius: 8,
    padding: 30,
    marginRight: 12,
    marginLeft: 12,
  },
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
    fontSize: 50,
    color: 'white',
  },
  titleText: {
    marginTop: 10,
    fontFamily: 'Cochin',
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
  },
  headerText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    color: 'white',
    backgroundColor: '#002D04',
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 15,
    color: 'white',
  },
  taskContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: '#68A678',
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
});
