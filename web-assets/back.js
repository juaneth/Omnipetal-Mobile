import { App as CapacitorApp } from '@capacitor/app';

CapacitorApp.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
        CapacitorApp.exitApp();
    } else {
        window.history.back();
    }
});