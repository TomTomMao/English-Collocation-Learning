import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type ToastVariant = 'default' | 'success' | 'info' | 'destructive';

type ToastOptions = {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
};

type ToastItem = ToastOptions & { id: number };

type ToastContextValue = {
  toast: (options: ToastOptions) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const createToastId = () => Number(`${Date.now()}${Math.floor(Math.random() * 1000)}`);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (options: ToastOptions) => {
      const id = createToastId();
      const toast: ToastItem = {
        id,
        variant: 'default',
        duration: 3200,
        ...options,
      };

      setToasts((current) => [...current, toast]);

      window.setTimeout(() => dismiss(id), toast.duration);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ toast: addToast }), [addToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-viewport" role="status" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.variant ?? 'default'}`}>
            <div>
              <p className="toast-title">{toast.title}</p>
              {toast.description && <p className="toast-description">{toast.description}</p>}
            </div>
            <button className="toast-close" onClick={() => dismiss(toast.id)} aria-label="Close">
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context.toast;
};
