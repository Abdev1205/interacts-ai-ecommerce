import Progress from '@/components/common/progress/Progress';
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/lib/redux/store.js";

const ConfigProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <Progress />
      </PersistGate>
    </Provider>
  );
};

export default ConfigProviders;
