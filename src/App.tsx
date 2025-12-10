import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContent } from './AppContent.tsx';
import React from 'react';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
};

export default App;
