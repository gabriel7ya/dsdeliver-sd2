const API_URL = 'https://gabriel-deliver-sds2.herokuapp.com';

import axios from "axios";

export function fetchOrders(){
    return axios(`${API_URL}/orders`);
}

export function confirmDelivery(ordeId: number){
    return axios.put(`${API_URL}/orders/${ordeId}/delivered`)
}
