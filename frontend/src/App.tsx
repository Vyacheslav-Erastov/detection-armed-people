import React from 'react';
import { tasks } from './data';
import Task from './components/ordinary/Task';
import Base from './layout/Base';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './assets/theme/theme';

function App() {
  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <Base />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
