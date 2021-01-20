import styled from 'styled-components/native';

export const colors = {
  primary: "#1c87cb",
  secondary: "#006426",
  bg: "#efefef",
  buttonBg1: "#106887",
  buttonTxt1: "#e2e5e9",
  buttonBg2: "#106887",
  buttonTxt2: "#555",
  txt1: "#555",
  txt2: "#0B334D",
  txt3: '#ffffff',
  modalBg: '#ffffff',
  inputBg: "#E2E5E9"

  // primary: "#1ea1c7",
  // primary: "#70b3dc",
  // primary: "#2b7e4a",
  // primary: "#5f9d76",
  // primary: "#fff", 
}

export const BtnCTA = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 2px;
  border-radius: 10px;
  border-color: ${props => props.borderColor || colors.buttonBg1};
  background-color: ${props => props.bgColor || colors.buttonBg1};
  margin-top: 10px;
  margin-bottom: 10px;
  width: ${props => props.width || "80%"};
  padding: 15px;
`;

export const TxtBtnCTA = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.color || colors.buttonTxt1};
`;

export const BtnOption = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.bgColor || colors.primary};
  margin-top: 10px;
  margin-bottom: 10px;
  width: ${props => props.width || "80%"};
  padding: 15px;
`;

export const TxtBtnOption = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.color || "#fff"};
`;

export const BtnFilter = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.bgColor || colors.buttonBg2};
  padding: 10px 20px;
  margin: 0px 5px;
`;

export const TxtBtnFilter = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.color || colors.buttonTxt2};
`;

export const ScreenTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${props => colors.txt1};
  flex: 1;
`;

export const SectionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const ScreenDescription = styled.Text`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: ${props => colors.txt1};
  margin-bottom: 20px;
  width: 80%;
`;

export const SectionHeader = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${props => colors.txt1};
  /* width: 80%; */
  text-align: left;
  flex: 1;
`;

export const SectionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SectionButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${props => colors.txt1};
`;

export const SubjectItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SubjectTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color:  ${props => props.color || colors.txt1};
`;

export const TrashIcon = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  background-color: red;
`;

export const BtnSelect = styled.TouchableOpacity`

  align-items: center;
  justify-content: center;
  border-radius: 10px;
  /* border-color: #fff; */
  background-color: ${props => props.selected ? colors.buttonBg1 : colors.buttonBg2};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  margin: 5px;

`;

export const TxtBtnSelect = styled.Text`
  font-size: 16px;
  color: ${props => colors.txt1};
`;

export const BtnSeeMore = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-color: #fff;
  background-color: ${props => colors.buttonBg2};
  padding: 10px;

`;

export const TxtBtnSeeMore = styled.Text`
  font-size: 14px;
  color:${props => colors.txt3};
`;

export const SelectionRow = styled.View`

  flex: 1;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

`;

export const SelectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: ${props => colors.txt1};
  width: 90%;
`;

export const Container = styled.View`
  flex:1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => colors.bg};
  padding-top: 30px;
`;

export const Scroll = styled.View`
  flex: 1;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  width: 100%;
  padding: 10px 0px;
  background-color: ${props => colors.bg};
`;

export const ScrollContainer = styled.ScrollView.attrs(props => ({
  contentContainerStyle: { alignItems: 'center', justifyContent: "flex-start" },
  showsVerticalScrollIndicator: false,
}))`
  /* border-top-left-radius: 50px; */
  /* border-top-right-radius: 50px; */
  width: 100%;
`;

export const ScrollHorizontal = styled.ScrollView.attrs(props => ({
  contentContainerStyle: { alignItems: 'center', justifyContent: "flex-start" },
  showsHorizontalScrollIndicator: false,
  horizontal: true
}))`
  /* border-top-left-radius: 50px; */
  /* border-top-right-radius: 50px; */
  margin: 10px 0px;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => colors.bg};
  margin: 30px 0px 10px 0px;
  padding: 5px 0px;
  width: 90%;
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  /* width: 100%; */
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const AdContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  width: 90%;
`;

export const AdTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => colors.txt1};
  margin: 5px 0px;
  width: 90%;
`;

export const AdPrice = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: ${props => colors.txt1};
`;

export const AdPriceContainer = styled.View`
  margin: 3px 0px;
  padding: 5px;
  background-color: ${props => colors.bg};
  border-radius: 50px;
`;

export const AdAdvertiser = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${props => colors.txt1};
`;
export const AdImg = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
export const Logo = styled.Image`
  border-radius: 10px;
  width: 180px;
  height: 120px;
`;

export const BtnQuick = styled.TouchableOpacity`

`;

export const BtnQuickTxt = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => colors.txt1};
  margin: 3px 5px;
`;

//modal

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled.View.attrs(props => ({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  borderTopWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
}))`

  /* margin: 20; */
  background-color: ${props => colors.modalBg};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  width: 100%;
  position: absolute; 
  bottom: 0; 
  margin: 0; 
  border: 2px solid #aaa;
  /* elevation: 0; */
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${props => colors.txt1};
`;
export const ModalDescription = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => colors.txt1};
  margin: 10px 0px;
  text-align: center;
`;
export const ModalInfo = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => colors.txt1};
  margin: 5px 0px;
  text-align: center;
`;
export const BtnModal = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor || colors.buttonBg1};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 50px;
`;
export const TxtBtnModal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color || colors.buttonTxt1};
`;

//inputs

export const TxtInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: "#999"
}))`
  width: 80%;
  height: 50px;
  background-color:  ${props => colors.inputBg};
  border-radius: 10px;
  padding: 0px 10px;
  margin: 5px 0px;
  font-size: 16px;
`;
export const BtnBack = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color:  ${props => colors.buttonBg2};
  margin: 5px 20px;
  padding: 10px 20px;
  border-radius: 50px;
`;
export const TxtBtnBack = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${props => colors.buttonTxt2};
`;

export const BtnSub = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${props => props.bgColor || "#fff"};
  margin-top: 10px;
  margin-bottom: 10px;
  width: ${props => props.width || "80%"};
  padding: 15px;
`;

export const TxtBtnSub = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.color || colors.primary};
`;

export const TxtInput1 = styled.TextInput.attrs(props => ({
  placeholderTextColor: colors.primary
}))`
  /* width: 80%; */
  flex:1;
  height: 50px;
  padding: 0px 0px;
  margin: -10px 10px 0px 10px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-color: ${props => props.color || colors.primary};
`;

export const Illustration = styled.Image`
  width: ${props => 1125 * 0.3 + "px"};
  height: ${props => 1082 * 0.3 + "px"};
`;

export const MiniBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${props => props.active ? colors.buttonBg1 : "#fff"};
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px 15px;
`;

export const TxtMiniBtn = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.active ? "#fff" : colors.buttonBg1};
`;



export const VideoClassBoxContainer = styled.TouchableOpacity`
  margin: 0px 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const VideoClassBoxTitle = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: ${props => colors.txt2};
  margin: 0px 3px;
`;

export const VideoClassBoxVideo = styled.View`
  /* width: 162px; */
  /* height: 108px; */
  margin-bottom: 10px;
  padding: 10px 10px;
  background-color: #e2e5e9;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
`;


export const FooterContainer = styled.View`
flex-direction: row;
flex-wrap: nowrap;
align-items: flex-end;
justify-content: space-around;
padding: 10px 0px 15px 0px;
width: 100%;
background-color: #fff;
`;