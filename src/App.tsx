import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';
import CreatePoll from './pages/create-poll/CreatePoll';
import ViewPolls from './pages/view-polls/ViewPolls';
import Navigation from './components/navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';
import { GlobalStyle } from './styles/globalStyles';
import { Notification } from './components/notification';
import './localization';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <div>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Navigate to="/create-poll" replace />} />
                        <Route path="/create-poll" element={<CreatePoll />} />
                        <Route path="/view-polls" element={<ViewPolls />} />
                        <Route path="/view-polls/:id" element={<ViewPolls />} />
                    </Routes>
                    <Notification />
                </div>
            </ThemeProvider>
        </Provider>
    );
};

export default App;
