// import React from "react";
// import { useState } from "react";
// import { View, Text, Button } from "react-native";
// import { Calendar } from "react-native-calendars";
// import "./CalendarDB";
// import { fetchData, updateStreak } from "./CalendarDB";

// var vals = new Set<string>();
// var localUser = "";

// const CalendarView = () => {
//   const [selectedDate, setSelectedDate] = useState("");

//   const setTodaysDate = () => {
//     setSelectedDate(new Date().toISOString().split("T")[0]);
//   };
//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Button title="Task done for today" onPress={setTodaysDate} />
//       <Text>Selected Date: {selectedDate}</Text>
//       <MyCalendar
//         selectedDate={selectedDate}
//         setSelectedDate={setSelectedDate}
//       />
//     </View>
//   );
// };

// const MyCalendar = ({ selectedDate, setSelectedDate }) => {
//   const [markedDates, setMarkedDates] = useState({});
//   vals = fetchData(localUser);
//   useEffect(() => {
//     const username = "someUsername"; // Replace with actual username
//     const newMarkedDates = {};
//     vals.forEach((date) => {
//       newMarkedDates[date] = { selected: true, selectedColor: "blue" };
//     });
//     setMarkedDates(newMarkedDates);
//   }, []);

//   const handleDayPress = (day) => {
//     setSelectedDate(day.dateString);
//     vals.add(day.dateString);
//     updateStreak("someUsername", vals); // Replace with actual username

//     setMarkedDates((prevMarkedDates) => ({
//       ...prevMarkedDates,
//       [day.dateString]: { selected: true, selectedColor: "blue" },
//     }));
//   };

//   return (
//     <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
//       <Calendar
//         onDayPress={handleDayPress}
//         markedDates={{
//           [selectedDate]: { selected: true, selectedColor: "blue" },
//         }}
//       />
//     </View>
//   );
// };

// export default CalendarView;
// function useEffect(arg0: () => void, arg1: never[]) {
//   throw new Error("Function not implemented.");
// }
