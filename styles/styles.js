import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#5E80AD',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 40,
    backgroundColor: '#5E80AD',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#FFFFFF'
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 8
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#25318A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  resultText: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 15,
    textAlign: 'center'
  },
  classification: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#065F46',
    backgroundColor: '#D1FAE5',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
    textAlign: 'center'
  },
  backButton: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: 'bold'
  }
});
