// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1, // Make sure this is visible
    borderBottomColor: '#ccc', // Light grey for the separator
    marginVertical: 5, // Keeps space between items
  },
  listItemText: {
    fontSize: 18,
    color: '#333', // Dark color for text
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  }
});
