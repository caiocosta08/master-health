import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import * as Styled from "../assets/styles/styled";

const Header = (props) => {

  const handleLogout = () => {
    props.logout();
    props.navigation.navigate('Login');
  }

  return (
    <Styled.HeaderContainer>
      <Styled.ScreenTitle>{props.screenTitle}</Styled.ScreenTitle>
      {/* {props.screenTitle == "Home" &&
        <BtnFilter>
          <TxtBtnFilter>Home</TxtBtnFilter>
        </BtnFilter>
      } */}
      {props.screenTitle == "Home" && <View style={{ flex: 1 }} />}
      <TouchableOpacity>
        <Ionicons name="ios-cog" style={{ marginHorizontal: 10 }} size={32} color="#522780" />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => handleLogout()}>
        <Ionicons name="ios-log-out" style={{ marginHorizontal: 10 }} size={34} color="#522780" />
      </TouchableOpacity>
    </Styled.HeaderContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    //modal
    modalInfoVisible: state.modalReducer.modalInfoVisible,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //modal
    setModalInfoVisible: (modalInfoVisible) => dispatch({ type: 'SET_MODAL_INFO_VISIBLE', payload: { modalInfoVisible } }),
  
    //user logout
    logout: () => dispatch({ type: 'LOGOUT', payload: {}}),}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);