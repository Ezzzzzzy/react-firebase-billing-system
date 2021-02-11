import { purgeStoredState } from "redux-persist";

export const isAuth = () => {
    if(localStorage.getItem('billingToken')){
        return true;
    }

    return false;
};

export const deleteToken = () => {
   return localStorage.removeItem('billingToken');
}
