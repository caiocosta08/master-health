import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { connect } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';

import logo from '../assets/images/logo-2.png';

import * as Styled from '../assets/styles/styled';
import ModalInfo from '../components/modals/ModalInfo';

const Login = (props) => {


  const [userToLogin, setUserToLogin] = React.useState({
    email: '',
    password: ''
  });

  const loginUser = (user) => {
    // if (user.email == 'login123' && user.password == 'senha123')
    //   props.navigation.navigate('Home');
    // else
    //   Alert.alert('Erro', 'Usuário ou senha incorretos');
    props.navigation.navigate('Home');
  }

  const [info, setInfo] = React.useState(props.route.params);
  React.useEffect(() => {
    // console.log({ props })
    setInfo(props.route.params);
  }, [props.route.params]);

  const [modal, setModal] = React.useState({ title: "Em desenvolvimento", desc: "Esta função que você tentou acessar ainda está em desenvolvimento" });

  return (
    <Styled.Container style={{ justifyContent: 'center', /*backgroundColor: '#0f3040'*/ }}>
      <ModalInfo title={modal.title} description={modal.desc} />
      <Styled.Logo source={logo} />
      <Styled.TxtInput placeholder="E-mail" onChangeText={(t) => setUserToLogin({ ...userToLogin, email: t })} />
      <Styled.TxtInput placeholder="Senha" secureTextEntry onChangeText={(t) => setUserToLogin({ ...userToLogin, password: t })} />
      <Styled.BtnCTA onPress={() => props.navigation.navigate('Home')}>
        <Styled.TxtBtnCTA>ENTRAR</Styled.TxtBtnCTA>
      </Styled.BtnCTA>
      <View style={{ width: "90%", marginVertical: 20, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#aaa" }} />
        <Text style={{ marginHorizontal: 10, fontWeight: '500', color: "#aaa" }}>OU</Text>
        <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#aaa" }} />
      </View>
      <View style={{ width: "90%", marginVertical: 5, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
        <Styled.BtnSelect style={{ flex: 1, backgroundColor: "transparent" }} onPress={() => props.navigation.navigate('Register')}>
          <Styled.TxtBtnSelect style={{ color: Styled.colors.txt2, fontWeight: "600", fontSize: 14 }}>CADASTRO</Styled.TxtBtnSelect>
        </Styled.BtnSelect>
        <Styled.BtnSelect style={{ flex: 1, backgroundColor: "transparent" }} onPress={() => props.setModalInfoVisible(true)}>
          <Styled.TxtBtnSelect style={{ color: Styled.colors.txt2, fontWeight: "600", fontSize: 14 }}>RECUPERAR SENHA</Styled.TxtBtnSelect>
        </Styled.BtnSelect>
      </View>
    </Styled.Container>
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
    logout: () => dispatch({ type: 'LOGOUT', payload: {} }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);