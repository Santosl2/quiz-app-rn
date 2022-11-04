import styled from "styled-components/native";

// Checked color #5e5580
// Unchecked color #8b80b6
export const CustomTouchableOpacity = styled.TouchableOpacity`
  background-color: ${(props) => (props.isChecked ? "#5e5580" : "#8b80b6")};
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
`;

export const CustomText = styled.Text`
  color: #fff;
`;
