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

const Register = (props) => {


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
    <Styled.Container style={{ justifyContent: 'center', /*backgroundColor: '#0f3040'*/ marginTop: 0, paddingTop: 0}}>
      <ModalInfo title={modal.title} description={modal.desc} />

      <Styled.ScrollContainer>
        <View style={{ width: '100%', height: 150, backgroundColor: Styled.colors.primary, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, paddingTop: 10, marginBottom: 10 }}>
          <Text style={{fontSize: 30, fontWeight: '300', color: '#fff', }}>CADASTRO</Text>
          {/* <Text style={{fontSize: 11, fontWeight: '300', color: '#fff', width: '90%', textAlign: 'center'}}>O aplicativo tem por objetivo ajudar a pessoa interessada em fazer uma
cirurgia plástica, reduzindo a procura pelas informações dos procedimentos.</Text> */}
        </View>
        {/* <Styled.Logo source={logo} /> */}
        <Styled.TxtInput placeholder="Nome" />
        <Styled.TxtInput placeholder="Endereço" />
        <Styled.TxtInput placeholder="E-mail" />
        <Styled.TxtInput placeholder="Celular" />
        <Styled.TxtInput placeholder="Data de Nascimento" />
        <Styled.TxtInput placeholder="Senha" secureTextEntry />
        <Styled.TxtInput placeholder="Confirmar Senha" secureTextEntry />
        <View style={{ width: "90%", marginVertical: 20, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#aaa" }} />
          <Text style={{ marginHorizontal: 10, fontWeight: '500', color: "#aaa" }}>CONFIRA SEUS DADOS</Text>
          <View style={{ flex: 1, borderBottomWidth: 1, borderBottomColor: "#aaa" }} />
        </View>
        <Styled.BtnCTA onPress={() => props.navigation.navigate('Home')}>
          <Styled.TxtBtnCTA>CADASTRAR</Styled.TxtBtnCTA>
        </Styled.BtnCTA>
        {/* <View style={{ width: "90%", marginVertical: 5, flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
          <Styled.BtnSelect style={{ flex: 1, backgroundColor: "transparent" }} onPress={() => props.setModalInfoVisible(true)}>
            <Styled.TxtBtnSelect style={{ color: Styled.colors.txt2, fontWeight: "600", fontSize: 14 }}>CADASTRO</Styled.TxtBtnSelect>
          </Styled.BtnSelect>
          <Styled.BtnSelect style={{ flex: 1, backgroundColor: "transparent" }} onPress={() => props.setModalInfoVisible(true)}>
            <Styled.TxtBtnSelect style={{ color: Styled.colors.txt2, fontWeight: "600", fontSize: 14 }}>RECUPERAR SENHA</Styled.TxtBtnSelect>
          </Styled.BtnSelect>
        </View> */}
      </Styled.ScrollContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);