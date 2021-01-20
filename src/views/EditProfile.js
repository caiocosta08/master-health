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
import Footer from '../components/Footer';

const EditProfile = (props) => {

  const [modal, setModal] = React.useState({ title: "Em desenvolvimento", desc: "Esta função que você tentou acessar ainda está em desenvolvimento" });

  return (
    <Styled.Container style={{ justifyContent: 'center', backgroundColor: '#fff', paddingTop: 40 }}>
      <ModalInfo title={modal.title} description={modal.desc} />

      <Styled.ScrollContainer>
        {/* <Styled.Logo source={profilePic} /> */}
        <View style={{ width: 75, height: 75, backgroundColor: '#aaa', borderRadius: 50 }} />
        <Styled.BtnSub>
          <Styled.TxtBtnSub>Trocar foto de perfil</Styled.TxtBtnSub>
        </Styled.BtnSub>

        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>

          {/* <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '95%', justifyContent: 'center', alignItems: 'space-between', marginVertical: 20 }}> */}
          {/* <View style={{ flex: 1 }} > */}
          <View style={{ width: '95%' }} >
            <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Nome</Text>
            <Styled.TxtInput1 placeholder="Nome" value="Julieta Maria" style={{ color: Styled.colors.primary }} />
          </View>
          {/* <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Sobrenome</Text>
              <Styled.TxtInput1 placeholder="Sobrenome" value="Riviera" style={{ color: Styled.colors.primary }} />
            </View>
          </View> */}

          <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '95%', justifyContent: 'center', alignItems: 'space-between', marginVertical: 20 }}>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Data de nascimento</Text>
              <Styled.TxtInput1 placeholder="DD/MM/AAAA" value="14/05/1998" style={{ color: Styled.colors.primary }} />
            </View>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Sexo</Text>
              <Styled.TxtInput1 placeholder="Sexo" value="Feminino" style={{ color: Styled.colors.primary }} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '95%', justifyContent: 'center', alignItems: 'space-between', marginVertical: 20 }}>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Estado Civil</Text>
              <Styled.TxtInput1 placeholder="Estado Civil" value="Solteira" style={{ color: Styled.colors.primary }} />
            </View>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Profissão</Text>
              <Styled.TxtInput1 placeholder="Profissão" value="Arquiteta" style={{ color: Styled.colors.primary }} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '95%', justifyContent: 'center', alignItems: 'space-between', marginVertical: 20 }}>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>CPF</Text>
              <Styled.TxtInput1 placeholder="CPF" value="123.456.789-00" style={{ color: Styled.colors.primary }} />
            </View>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>RG</Text>
              <Styled.TxtInput1 placeholder="RG" value="1234567" style={{ color: Styled.colors.primary }} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '95%', justifyContent: 'center', alignItems: 'space-between', marginVertical: 20 }}>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Mudar senha</Text>
              <Styled.TxtInput1 placeholder="Senha" value="12345678" secureTextEntry style={{ color: Styled.colors.primary }} />
            </View>
            <View style={{ flex: 1 }} >
              <Text style={{ marginHorizontal: 10, fontSize: 12, color: Styled.colors.txt2, fontWeight: '400' }}>Mudar e-mail</Text>
              <Styled.TxtInput1 placeholder="E-mail" value="manu@gmail.com" style={{ color: Styled.colors.primary }} />
            </View>
          </View>

          <Styled.BtnSub>
            <Styled.TxtBtnSub>Mais informações</Styled.TxtBtnSub>
          </Styled.BtnSub>

        </View>

        <View />
      </Styled.ScrollContainer>

      <Footer screenTitle="Home" client navigation={props.navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);