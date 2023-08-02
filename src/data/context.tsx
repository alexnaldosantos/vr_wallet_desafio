import React, { PropsWithChildren, createContext, useContext, useState } from 'react';
import { CreditCard } from "./creditcard";

type WalletData = {
  current?: CreditCard;
  cards?: CreditCard[];
}

interface WalletContextData {
  wallet: WalletData;
  addCard: (card: CreditCard) => void;
  setCurrentCard: (cardId: string) => void;
}


const WalletContext = createContext<WalletContextData | undefined>(undefined);

export const WalletProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletData>({});

  const addCard = (card: CreditCard) => {
    setWallet((prevState) => ({
      ...prevState,
      cards: [...(prevState.cards || []), card],
    }));
  };

  const setCurrentCard = (cardId: string) => {
    const card = wallet.cards?.find((card) => card.id === cardId);
    if (card) {
      setWallet((prevState) => ({
        ...prevState,
        current: card,
      }));
    }
  };

  return (
    <WalletContext.Provider value={{ wallet, addCard, setCurrentCard }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
