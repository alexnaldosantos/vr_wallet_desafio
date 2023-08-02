import React, { PropsWithChildren, createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CreditCard } from "./creditcard";
import WalletAPI from './api';

type WalletData = {
  current?: CreditCard;
  adding?: CreditCard;
  cards?: CreditCard[];
}

interface WalletContextData {
  wallet: WalletData;
  addCard: (card: CreditCard) => void;
  setAddingCard: (card: CreditCard) => void;
  setCurrentCard: (cardId: string) => void;
  loadCards: () => void;
}


const WalletContext = createContext<WalletContextData | undefined>(undefined);

export const WalletProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletData>({});
  const api = WalletAPI.getInstance();

  const addCard = useCallback(async (card: CreditCard) => {
    const newCard = await api.addCard(card);

    setWallet(prevData => ({
      ...prevData,
      cards: [...(prevData.cards || []), newCard]
    }));
  }, []);

  const setAddingCard = (card: CreditCard) => {
    if (card) {
      setWallet((prevState) => ({
        ...prevState,
        adding: card,
      }));
    }
  };

  const loadCards = useCallback(async () => {
    const existingCards = await api.getCards();
    setWallet(prevData => ({
      ...prevData,
      cards: existingCards
    }));
  }, []);

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
    <WalletContext.Provider value={{ wallet, loadCards, setAddingCard, addCard, setCurrentCard }}>
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
