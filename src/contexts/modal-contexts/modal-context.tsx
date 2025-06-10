import { createContext } from "react";

export interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
