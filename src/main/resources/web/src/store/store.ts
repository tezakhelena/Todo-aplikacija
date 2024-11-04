import { combineReducers, configureStore } from "@reduxjs/toolkit";
import korisniciReducer from './slices/korisniciSlice'
import filteriReducer from './slices/filteriSlice'
import authReducer from './slices/authSlice'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    korisnici: korisniciReducer,
    filteri: filteriReducer,
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disable the serializable check
    }),
})

export const persistor = persistStore(store);

export default store;