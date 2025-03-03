import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const setTodaysDate = () => {
    setSelectedDate(new Date().toISOString().split("T")[0]); // Set today's date in YYYY-MM-DD format
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Task done for today" onPress={setTodaysDate} />
      <Text>Selected Date: {selectedDate}</Text>
      <MyCalendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </View>
  );
};

const MyCalendar = ({ selectedDate, setSelectedDate }) => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "blue" },
        }}
      />
    </View>
  );
};

export default CalendarView;
