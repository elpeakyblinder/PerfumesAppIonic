import {
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonTitle,
    IonToolbar,
    IonToggle,
} from '@ionic/react';
import {
    homeOutline,
    flaskOutline,
    bookmarkOutline,
    informationCircleOutline,
    moonOutline
} from 'ionicons/icons';
import { useEffect, useState } from 'react';

const Menu = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        if (savedMode !== null) {
            return JSON.parse(savedMode);
        }
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <IonMenu contentId="main" type="overlay">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Menú</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonMenuToggle autoHide={false}>
                        <IonItem button routerLink="/pages/inicio" routerDirection="none">
                            <IonIcon slot="start" icon={homeOutline} />
                            <IonLabel>Inicio</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem button routerLink="/pages/perfumes" routerDirection="none">
                            <IonIcon slot="start" icon={flaskOutline} />
                            <IonLabel>Perfumes</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem button routerLink="/pages/mis-perfumes" routerDirection="none">
                            <IonIcon slot="start" icon={bookmarkOutline} />
                            <IonLabel>Mis Perfumes Guardados</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle autoHide={false}>
                        <IonItem button routerLink="/pages/acerca" routerDirection="none">
                            <IonIcon slot="start" icon={informationCircleOutline} />
                            <IonLabel>Acerca de</IonLabel>
                        </IonItem>
                    </IonMenuToggle>
                </IonList>
                <IonList style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <IonItem>
                        <IonIcon slot="start" icon={moonOutline} />
                        <IonLabel>Modo Oscuro</IonLabel>
                        <IonToggle
                            slot="end"
                            checked={isDarkMode}
                            onIonChange={e => setIsDarkMode(e.detail.checked)}
                        />
                    </IonItem>
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
