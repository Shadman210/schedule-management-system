"use client";

import React, { createContext, useContext } from "react";

interface UiContext {}

const UiContext = createContext<UiContext | null>(null);

interface UiProviderProps {
    children?: React.ReactNode;
}

export const UiProvider = ({ children }: UiProviderProps) => {
    return <UiContext.Provider value={{}}>{children}</UiContext.Provider>;
};

export const useUi = () => {
    const context = useContext(UiContext);
    if (context === null) {
        throw new Error("useUi must be used within a UiProvider");
    }
    return context;
};
