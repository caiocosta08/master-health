import React from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { connect } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import doctor from '../assets/images/doctor.png';

import abdomen from '../assets/images/abdomen.png';
import lipo from '../assets/images/lipo.png';
import facial from '../assets/images/facial.png';
import gluteos from '../assets/images/gluteos.png';
import mamoplastia from '../assets/images/mamoplastia.png';
import nariz from '../assets/images/nariz.png';
import palpebras from '../assets/images/palpebras.png';
import silicone from '../assets/images/silicone.png';

import * as Styled from '../assets/styles/styled';
// import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = (props) => {

  const [modal, setModal] = React.useState({ title: "Em desenvolvimento", desc: "Esta função que você tentou acessar ainda está em desenvolvimento" });

  const [videoClasses, setVideoClasses] = React.useState([
    { id: 1, title: "Dr. Marcos Silveira", description: "Cirurgião Plástico" },
    { id: 2, title: "Dr. Marcos Silveira", description: "Cirurgião Plástico" },
    { id: 3, title: "Dr. Marcos Silveira", description: "Cirurgião Plástico" },
    { id: 4, title: "Dr. Marcos Silveira", description: "Cirurgião Plástico" },
  ]);
  const [categories, setCategories] = React.useState([
    { id: 1, title: "Plástica de Abdômen", description: "Cirurgião Plástico", img: abdomen},
    { id: 2, title: "Lipoaspiração", description: "Cirurgião Plástico", img: lipo},
    { id: 3, title: "Mamoplastia", description: "Cirurgião Plástico", img: mamoplastia},
    { id: 4, title: "Prótese de Silicone", description: "Cirurgião Plástico", img: silicone},
    { id: 5, title: "Rejuvenescimento Facial", description: "Cirurgião Plástico", img: facial},
    { id: 6, title: "Plástica de Nariz", description: "Cirurgião Plástico", img: nariz},
    { id: 7, title: "Prótese de Glúteos", description: "Cirurgião Plástico", img: gluteos},
    { id: 8, title: "Plástica de Pálpebras", description: "Cirurgião Plástico", img: palpebras},
  ]);

  return (
    <Styled.Container style={{ paddingTop: 0 }}>
      {/* <Header screenTitle="Home" navigation={props.navigation} /> */}

      {/* <Styled.Scroll> */}
      <Styled.ScrollContainer>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F7F7', width: '100%', paddingVertical: 30, paddingHorizontal: 10, marginBottom: 30, flexDirection: 'row', flexWrap: 'nowrap' }}>
          <Text style={{ fontWeight: '400', fontSize: 24, color: Styled.colors.buttonBg1, flex: 1 }}>Home</Text>
        </View>
        <Styled.SectionContainer>
          <Styled.SectionTitle>Médicos</Styled.SectionTitle>
          <Styled.BtnSeeMore >
            <Styled.TxtBtnSeeMore>VER MAIS</Styled.TxtBtnSeeMore>
          </Styled.BtnSeeMore>
        </Styled.SectionContainer>
        <Styled.ScrollHorizontal>
          {videoClasses && videoClasses.map(c => {
            return (
              <Styled.VideoClassBoxContainer key={c.id}>
                <Styled.VideoClassBoxVideo>
                  <View style={{}} >
                    <Styled.VideoClassBoxTitle style={{fontSize: 10, fontWeight: '300', color: Styled.colors.txt1}}>MÉDICO</Styled.VideoClassBoxTitle>
                    <Styled.VideoClassBoxTitle style={{fontSize: 14, fontWeight: '500', color: Styled.colors.primary, marginBottom: 5}}>{c.title}</Styled.VideoClassBoxTitle>
                    <Styled.VideoClassBoxTitle style={{fontSize: 10, fontWeight: '300', color: Styled.colors.txt1}}>ESPECIALIDADE</Styled.VideoClassBoxTitle>
                    <Styled.VideoClassBoxTitle style={{fontSize: 14, fontWeight: '500', color: Styled.colors.primary}}>{c.description}</Styled.VideoClassBoxTitle>
                  </View>
                  <Image source={doctor} style={{ width: 378 * 0.2, height: 486 * 0.2 }} />
                </Styled.VideoClassBoxVideo>
              </Styled.VideoClassBoxContainer>
            );
          })}
        </Styled.ScrollHorizontal>
        <Styled.SectionContainer>
          <Styled.SectionTitle>Categorias</Styled.SectionTitle>
          <Styled.BtnSeeMore >
            <Styled.TxtBtnSeeMore>VER MAIS</Styled.TxtBtnSeeMore>
          </Styled.BtnSeeMore>
        </Styled.SectionContainer>
        {categories && categories.map(c => {
          return (
            <Styled.VideoClassBoxContainer style={{flex: 1,width: '90%'}} key={c.id}>
              <Styled.VideoClassBoxVideo style={{flexDirection: 'column', backgroundColor: Styled.colors.txt2, width: '100%'}}>
                <Image source={c.img} style={{ width: 125, height: 125, borderRadius: 10 }} />
                <Styled.VideoClassBoxTitle style={{color: '#fff', marginTop: 5, fontSize: 18}}>{c.title}</Styled.VideoClassBoxTitle>
                {/* <Styled.VideoClassBoxTitle style={{color: '#fff', marginTop: 5}}>{c.description}</Styled.VideoClassBoxTitle> */}
              </Styled.VideoClassBoxVideo>
            </Styled.VideoClassBoxContainer>
          );
        })}
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);