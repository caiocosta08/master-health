import * as React from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, TouchableHighlight, Alert, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

//components
import { ModalContainer, ModalView, BtnModal, TxtBtnModal, ModalTitle, ModalDescription, ModalInfo } from "../../assets/styles/styled";

const ModalConsultationInfo = (props) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalConsultationInfoVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <ModalContainer>
        <ModalView>
          <ModalTitle>{props.title}</ModalTitle>
          {/* <ModalDescription>{props.description}</ModalDescription> */}
          <ModalInfo>Médico: {props.informations.medical}</ModalInfo>
          <ModalInfo>Data: {props.informations.date}</ModalInfo>
          <ModalInfo>Horário: {props.informations.hour}</ModalInfo>
          <ModalInfo>Valor: {props.informations.value}</ModalInfo>
          <ModalInfo>Status: {props.informations.status}</ModalInfo>
          <BtnModal onPress={() => props.setModalConsultationInfoVisible(false)}>
            <TxtBtnModal>OK</TxtBtnModal>
          </BtnModal>
        </ModalView>
      </ModalContainer>
    </Modal >
  );
}


const mapStateToProps = (state) => {
  return {
    //modal
    modalConsultationInfoVisible: state.modalReducer.modalConsultationInfoVisible,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    //modal
    setModalConsultationInfoVisible: (modalConsultationInfoVisible) => dispatch({ type: 'SET_MODAL_CONSULTATION_INFO_VISIBLE', payload: { modalConsultationInfoVisible } }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConsultationInfo);