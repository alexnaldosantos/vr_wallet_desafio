import axios from 'axios';
import { CreditCard } from './creditcard';

const BASE_URL = 'http://10.0.2.2:3000';

class WalletAPI {
    private static instance: WalletAPI;

    private constructor() { }

    public static getInstance(): WalletAPI {
        if (!WalletAPI.instance) {
            WalletAPI.instance = new WalletAPI();
        }

        return WalletAPI.instance;
    }

    async addCard(card: CreditCard): Promise<CreditCard> {
        const response = await axios.post(`${BASE_URL}/cards`, card);
        return response.data;
    }

    async getCards(): Promise<CreditCard[]> {
        const response = await axios.get(`${BASE_URL}/cards`);
        return response.data;
    }
}

export default WalletAPI;