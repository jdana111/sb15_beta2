import { createContext } from 'react';

const defaultAppData = {
  dispatch: null,
  state: {
    city: null,
    programs: null
  }
}

const AppDataContext = createContext(defaultAppData);
export default AppDataContext
