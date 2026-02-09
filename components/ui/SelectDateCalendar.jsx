import { StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars';
import React from 'react'

const SelectDateCalendar = ({
    selectedDate,
    onDatePress,
    maxDate
}) => {
return (
    <Calendar
      style={styles.container}
      theme={calendarTheme}
      onDayPress={(day) => {
        onDatePress(day.dateString);
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: "#8B5CF6",
          dotColor: "#FFFFFF",
        },
      }}
      maxDate={maxDate}
    />
  )
}

export default SelectDateCalendar


const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  }
})



const calendarTheme = {
  backgroundColor: "#FFFFFF",
  calendarBackground: "#FFFFFF",

  // Month header
  monthTextColor: "#101828",
  textMonthFontSize: 18,
  textMonthFontWeight: "700",

  // Days of week (Lun, Mar…)
  textSectionTitleColor: "#667085",
  textSectionTitleFontSize: 12,
  textSectionTitleFontWeight: "500",

  // Days
  dayTextColor: "#101828",
  textDayFontSize: 14,
  textDayFontWeight: "500",

  // Today
  todayTextColor: "#8B5CF6",
  todayButtonFontWeight: "700",

  // Selected day
  selectedDayBackgroundColor: "#8B5CF6",
  selectedDayTextColor: "#FFFFFF",

  // Disabled days
  textDisabledColor: "#CBD5E1",

  // Arrows
  arrowColor: "#8B5CF6",
  arrowStyle: {
    paddingHorizontal: 8,
  },


};
