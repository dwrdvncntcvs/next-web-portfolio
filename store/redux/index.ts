import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import homeApi from "./api/homeApi";
import {
    homeData,
    skillData,
    portfolioData,
    portfolioDetailsData,
    experienceData,
} from "./features";

export const store = configureStore({
    reducer: {
        [homeApi.reducerPath]: homeApi.reducer,
        homeData,
        skillData,
        portfolioData,
        portfolioDetailsData,
        experienceData,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware().concat(homeApi.middleware);
    },
    devTools: true,
});

const makeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreReducerKey = keyof RootState;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const storeDispatch: AppDispatch = store.dispatch;

export const getStoreState = <K extends StoreReducerKey>(
    reducerKey: K
): RootState[K] => store.getState()[reducerKey];

export const wrapper = createWrapper(makeStore, { debug: false });
