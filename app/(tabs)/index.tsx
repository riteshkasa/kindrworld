import { Image, StyleSheet, Platform, StatusBar, SectionList } from 'react-native';
import {Button, View, Text, Alert, TextInput, ScrollView } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, {useState} from 'react';

const TASKS = [
  'Practice active listening 👂',
  'Compliment someone honestly 😊',
  'Help a friend with a task 🤝',
  'Offer encouragement to someone struggling 💪',
  'Spend time with someone who needs company 👥',
  'Apologize sincerely when you’re wrong 🙏',
  'Express gratitude daily 🙌',
  'Make time for self-care 🛁',
  'Set a goal and work towards it 🎯',
  'Read at least 10 pages of a book daily 📖',
  'Practice mindfulness for 5 minutes 🧘',
  'Help someone carry something heavy 🏋️',
  'Support a local business 🏪',
  'Volunteer your time or skills ⏳',
  'Take a break when you need it 🧘‍♀️',
  'Organize your space for better focus 🧹',
  'Listen without interrupting 🗣️',
  'Learn something new every day 🎓',
  'Forgive someone, even if they don’t ask for it 💖',
  'Give someone a smile 😁',
  'Pay it forward with a kind gesture 🚗',
  'Pick up litter when you see it 🗑️',
  'Avoid gossip and speak kindly about others 🗣️',
  'Take the time to be present and mindful 🧠',
  'Show appreciation to those who help you 🙏',
  'Be patient with others ⏳',
  'Take responsibility for your actions 👥',
  'Eat a healthy meal 🥗',
  'Offer to help a neighbor with something 🏠',
  'Express your feelings honestly 💬',
  'Write down three things you’re grateful for 📝',
  'Be open to constructive criticism 🧐',
  'Celebrate others’ successes 🎉',
  'Share a positive article or story 📚',
  'Be on time for meetings or appointments ⏰',
  'Be generous with your time ⏳',
  'Avoid multitasking for better focus 🎯',
  'Give your full attention during conversations 👂',
  'Reduce your screen time for more real-life connections 📱',
  'Help someone solve a problem 🧩',
  'Check in on a friend or family member 🤗',
  'Learn a new skill or hobby 🎨',
  'Set healthy boundaries in relationships 🚧',
  'Make a to-do list and prioritize tasks 📋',
  'Practice gratitude for what you have 🙏',
  'Laugh every day 😂',
  'Focus on what you can control 🛠️',
  'Ask for help when you need it 🤲',
  'Support a cause you care about 🌱',
  'Mentor someone younger or less experienced 🧑‍🏫',
  'Give your best effort, even on small tasks 💪',
  'Be kind to yourself when you make mistakes 💖',
  'Reflect on your day before bed 🛏️',
  'Take deep breaths when you’re feeling stressed 🌬️',
  'Give a thoughtful gift to someone 🎁',
  'Respect others’ opinions, even if you disagree 🧠',
  'Accept that not everything is in your control 🌍',
  'Help a stranger when they need assistance 🙋',
  'Simplify your schedule for better balance 📅',
  'Take care of your physical health 💪',
  'Have a growth mindset 🌱',
  'Stop and enjoy the little moments ⏳',
  'Unplug and take a tech-free break 📴',
  'Celebrate small wins along the way 🏅',
  'Be empathetic to those around you 🧡',
  'Take time to be creative 🎨',
  'Ask someone how their day is going 💬',
  'Be mindful of your body language 💃',
  'Stay organized to reduce stress 📂',
  'Give someone a genuine thank you 🙏',
  'Say no when you need to 🛑',
  'Make a positive impact with your words 🗣️',
  'Help clean up after an event 🧽',
  'Do something kind for your community 🌍',
  'Express your needs clearly 💬',
  'Give a stranger a compliment ✨',
  'Share your experiences to help others 📚',
  'Encourage someone to take care of themselves 🧖‍♀️',
  'Make an effort to learn from others 🧠',
  'Do something you love every day 🎶',
  'Offer words of support to someone who is down 🗣️',
  'Cultivate patience when things are difficult ⏳',
  'Do one thing to make your environment better 🌳',
  'Avoid making assumptions about others 🤔',
  'Plan for the future while enjoying the present 🕰️',
  'Be a role model for others 🌟',
  'Laugh at your own mistakes 😂',
  'Get outside for some fresh air 🌳',
  'Focus on solutions, not problems 💡',
  'Find joy in everyday tasks 🧹',
  'Practice saying positive affirmations 🗣️',
  'Set aside time for deep thinking 🤔',
  'Embrace change as an opportunity for growth 🌱',
  'Get to know someone new 🫂',
  'Offer to mentor someone 📚',
  'Help someone achieve their goals 🎯',
  'Take time to enjoy nature 🌺',
  'Be mindful of your impact on the environment 🌍',
  'Think before you speak 🧠',
  'Smile at everyone you meet 😊',
  'Be grateful for the lessons in difficult moments 📚',
  'Find something to be grateful for, even on tough days 💖',
  'Try to understand someone’s perspective 🧐',
  'Reflect on your own behavior and how to improve 🧠',
  'Appreciate the people in your life 🙏',
  'Work on developing a new habit 🔄',
  'Surround yourself with positive influences 🌟',
  'Give yourself time to rest and recharge ⚡',
  'Check your privilege and practice humility 🤲',
  'Try to be a better listener every day 👂',
  'Notice the good in others 🥰',
  'Spend time with people who inspire you ✨',
  'Make a list of your strengths 💪',
  'Help others see the positives in their lives 🌟',
  'Focus on personal growth over perfection 🌱',
  'Be authentic and true to yourself 💯',
  'Use your time wisely ⏰',
  'Encourage creativity in others 🎨',
  'Be present with those you care about 🫂',
  'Give others the benefit of the doubt 🧠',
  'Forgive yourself for past mistakes 💖',
  'Take care of your mental health 💭',
  'Find ways to reduce stress in your life 🌿',
  'Take pride in your progress, not just the end result 🏅',
  'Support others in their personal growth 🌱',
  'Give credit where credit is due 🏅',
  'Ask for feedback to improve 🧠',
  'Celebrate others’ uniqueness ✨',
  'Work on becoming a better version of yourself 🌟'
];

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

var randomNumbers: number[] = [];
while(randomNumbers.length < 8){
    var r = Math.floor(Math.random() * TASKS.length) + 1;
    if(randomNumbers.indexOf(r) === -1) randomNumbers.push(r);
}

const task1 = TASKS[randomNumbers[0]];


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
            <View style={styles.welcomeContent}>
              <Text style={styles.baseText}>Help Build a KindrWorld</Text>
              <Image 
                source={require('../../assets/images/kindrworld.png')}
                style={styles.logo}
              />
            </View>
          </View>
        </View>

        {/* Tasks */}
        <View style={styles.taskContainer}>
          <Text style={styles.headerText}>Daily Generated Tasks</Text>
          <ScrollView style={styles.scrollableContainer}>
            {randomNumbers.map((number, index) => (
              <View key={index} style={styles.task}>
                <Text style={styles.baseText}>{TASKS[number]}</Text>
              </View>
            ))}
          </ScrollView>   
          <Text style={styles.headerText}>Create your own Task!</Text>
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
    width: 300,
    backgroundColor: '#002D04', 
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
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
    fontSize: 40,
    color: 'white',
  },
  titleText: {
    marginTop: 10,
    fontFamily: 'Cochin',
    fontSize: 30,
    color: 'white',
  },
  headerText: {
    fontFamily: 'Cochin',
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
    fontSize: 17,
    color: 'white',
  },
  taskContainer: {
    flex: 1,
    gap: 0,
    backgroundColor: '#68A678',
    padding: 10,
  },
  scrollableContainer: {
    maxHeight: 400,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
