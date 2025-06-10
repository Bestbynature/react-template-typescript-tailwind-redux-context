import ReactDOM from "react-dom";

import { useEffect } from "react";
import useModal from "src/contexts/modal-contexts/use-modal";

function ModalBox() {
  const { isModalOpen } = useModal();

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <ModalLayout>
      {/* {is2faModalOpen && <TwoFaSuccessModal />} */}
      {isModalOpen && <div className="modal-content">First Modal</div>}
    </ModalLayout>,
    modalRoot
  );
}

export default ModalBox;

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<LayoutWrapperProps> = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 bg-[#333951]/70 h-full w-full py-8 px-6 flex justify-center items-start backdrop-blur-sm z-[9999] overflow-y-auto">
      {children}
    </div>
  );
};
