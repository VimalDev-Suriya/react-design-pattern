// * Publisher and Subscriber

const listeners = new Map();

export const eventBus = {
  subscribe(eventName: string, handler: (obj: object) => void) {
    if (!listeners.has(eventName)) {
      listeners.set(eventName, new Set());
    }

    listeners.get(eventName).add(handler);

    // * Unsubscribe
    return () => {
      listeners.get(eventName)?.delete(handler);
    };
  },

  publisher(eventName: string, payload: object) {
    listeners.get(eventName)?.forEach((handler: (obj: object) => void) => {
      handler(payload);
    });
  },
};
