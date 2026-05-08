// * Publisher and Subscriber
type cb = (data: any) => void;
interface EventBus{
  subscribe: (eventName: string, handler: cb) => () => void,
  publish: (eventName: string, data:any) => void
}

const listeners = new Map<string, Set<cb>>();

export const eventBus:EventBus = {
  subscribe(eventName: string, handler: cb) {
    if (!listeners.has(eventName)) {
      listeners.set(eventName, new Set());
    }

    listeners.get(eventName)?.add(handler);

    // * UnSubscribe
    return () => {
      // * eventName & handler cb will be closure for the unsubscribe function
      listeners.get(eventName)?.delete(handler);
    }
  },

  publish(eventName: string, data: any) {
    listeners.get(eventName)?.forEach(handler => {
      handler(data);
    })
  }
}