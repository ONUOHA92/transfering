const bodyElement = document.querySelector("body") ! as HTMLElement;

const reducerMethods = {
  handleOpenModal: (state: any): void => {
    bodyElement.className = "scrolled-hidden";
    state.value = true;
  },
  handleCloseModal: (state: any): void => {
    bodyElement.className = "";
    state.value = false
  }
};

export default reducerMethods;
