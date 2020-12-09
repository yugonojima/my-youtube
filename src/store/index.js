import React, { createContext, useReducer } from "react";

const initialState = {
  popular: [],
  related: [],
  selected: {},
};
// reducer＝２つの値を受け取り、１つの値を返す関数,dispatch関数によって受け取ったactionごとにstateを更新する関数
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPULAR":
      return { ...state, popular: action.payload.popular };
    case "SET_SELECTED":
      return { ...state, selected: action.payload.selected }; //stateが複数あり、その中の一つを更新したい場合必ず...でstateを展開しなければいけない
    case "SET_RELATED":
      return { ...state, related: action.payload.related };
    default:
      return state;
  }
};

// stateとdispatch(stateを更新する関数)をどこでも使えるようにする
//しかし、まだreducerとつながりはない
export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null, //dispatch関数の初期値
});

const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState); //context(store)とreducerを結びつける
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>
      {children}
    </Store.Provider>
  );
};

export default StoreProvider;
