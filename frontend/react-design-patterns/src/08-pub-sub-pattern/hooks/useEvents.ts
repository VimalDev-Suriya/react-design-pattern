import { useEffect } from "react";
import { eventBus, type cb } from "../lib/event-bus";

export const useEvents = (eventName: string, handler: cb) => {
    useEffect(() => {
        const unsubscribe = eventBus.subscribe(eventName, handler);

        // * Whenever Components unmount - all the events will be un-subscribed
        return unsubscribe;
    }, [eventName, handler])
}