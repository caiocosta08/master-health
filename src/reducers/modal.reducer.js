const initialState = {
  modalConsultationInfoVisible: false,
  modalInfoVisible: false,
};

export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_MODAL_INFO_VISIBLE':
      return { ...state, modalInfoVisible: action.payload.modalInfoVisible };
      break;
    case 'SET_MODAL_CONSULTATION_INFO_VISIBLE':
      return { ...state, modalConsultationInfoVisible: action.payload.modalConsultationInfoVisible };
      break;
  }

  return state;
};