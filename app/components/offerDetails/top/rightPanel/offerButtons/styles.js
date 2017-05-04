import { defaultStyles } from './../../../../../config/styles';

const container = {
  marginTop: 3,
  display: 'flex',
  flexDirection: 'row',
};
const buttonContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}
const buttonText = {
  color: '#FFF',
  fontSize: 9,
};
const greenButton = {
  backgroundColor: defaultStyles.colors.green,
  paddingTop: 5,
  paddingBottom: 5,
};
const blueButton = {
  backgroundColor: defaultStyles.colors.blue,
  paddingTop: 5,
  paddingBottom: 5,
};
const redButton = {
  backgroundColor: defaultStyles.colors.red,
  paddingTop: 5,
  paddingBottom: 5,
};

export {
  container,
  buttonContainer,
  greenButton,
  blueButton,
  redButton,
  buttonText,
};