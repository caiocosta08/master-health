import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as Styled from "../assets/styles/styled";
import bars from "../assets/icons/bars.png"
import heart from "../assets/icons/heart.png"
import blog from "../assets/icons/blog.png"

import home from "../assets/icons/home-solid.png"
import book from "../assets/icons/book-medical-solid.png"
import user from "../assets/icons/user-solid.png"
import calendar from "../assets/icons/calendar-alt-solid.png"

const Footer = (props) => {

  return (
    <Styled.FooterContainer>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Styled.Illustration source={home} style={{ width: 50 * 0.70, height: 38.88 * 0.70 }} />
        <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 10, color: Styled.colors.primary }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Consultations')} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Styled.Illustration source={book} style={{ width: 43.75 * 0.60, height: 50 * 0.60 }} />
        <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 10, color: Styled.colors.primary }}>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Budget')} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Styled.Illustration source={calendar} style={{ width: 43.75 * 0.65, height: 50 * 0.65 }} />
        <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 10, color: Styled.colors.primary }}>Orçamentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')} style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Styled.Illustration source={user} style={{ width: 43.75 * 0.65, height: 50 * 0.65 }} />
        <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 10, color: Styled.colors.primary }}>Perfil</Text>
      </TouchableOpacity>
    </Styled.FooterContainer>
  );
};

export default Footer;