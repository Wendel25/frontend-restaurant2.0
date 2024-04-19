import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import React, { useCallback, createContext } from 'react';

export const ToastContext = createContext(() => {});

const ToastProvider = ({ children }) => {
  const { enqueueSnackbar } = useSnackbar();

  const toast = useCallback((message, variant = 'default') => {
    const options = {
      variant,
    };
    enqueueSnackbar(message, options);
  }, [enqueueSnackbar]);

  return (
    <ToastContext.Provider value={toast}>
      {children}
    </ToastContext.Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToastProvider;
