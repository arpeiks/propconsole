import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Backdrop = styled(motion.div)`
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalRoot = styled(motion.div)`
  width: 100%;
  margin: auto;
  padding: 16px;
  max-width: 760px;
  background-color: #fff;

  & button {
    max-width: 280px;
    margin-bottom: 4em;
  }
`;

const Child = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Modal = ({ show, children, closeModal }: any) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <Backdrop
          initial="hidden"
          animate="visible"
          variants={backdrop}
          onClick={closeModal}
        >
          <ModalRoot>
            <Child>{children}</Child>
          </ModalRoot>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
