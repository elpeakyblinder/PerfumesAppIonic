import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardContent, 
    IonButtons, 
    IonMenuButton,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonCardHeader,
    IonCardTitle
} from '@ionic/react';
import { informationCircleOutline, buildOutline, logoReact, logoIonic, flashOutline, logoCapacitor, personCircleOutline } from 'ionicons/icons';

const AcercaDe: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Acerca de la App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="overflow-hidden rounded-xl shadow-lg dark:bg-zinc-800">
                    <IonCardHeader className="flex items-center gap-4">
                        <IonIcon icon={informationCircleOutline} className="text-4xl text-blue-500" />
                        <div>
                            <IonCardTitle className="text-2xl font-bold">PerfumeApp v1.0</IonCardTitle>
                            <p className="text-gray-500 text-center dark:text-gray-400">Tu diario de fragancias</p>
                        </div>
                    </IonCardHeader>
                    <IonCardContent>
                        <p className="mb-4">
                            Esta aplicación fue desarrollada como proyecto final de evaluación para la materia de Desarrollo para Dispositivos Inteligentes - 9A.
                        </p>
                        
                        <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                            <IonIcon icon={buildOutline} color="medium" />
                            Tecnologías Utilizadas
                        </h3>
                        <IonList lines="none" className="dark:bg-zinc-800">
                            <IonItem className="dark:[--background:transparent]">
                                <IonIcon icon={logoReact} slot="start" color="primary" />
                                <IonLabel>React</IonLabel>
                            </IonItem>
                            <IonItem className="dark:[--background:transparent]">
                                <IonIcon icon={logoIonic} slot="start" color="secondary" />
                                <IonLabel>Ionic Framework</IonLabel>
                            </IonItem>
                            <IonItem className="dark:[--background:transparent]">
                                <IonIcon icon={flashOutline} slot="start" color="tertiary" />
                                <IonLabel>Vite</IonLabel>
                            </IonItem>
                            <IonItem className="dark:[--background:transparent]">
                                <IonIcon icon={logoCapacitor} slot="start" />
                                <IonLabel>Capacitor</IonLabel>
                            </IonItem>
                        </IonList>

                        <div className="mt-6 border-t pt-4 dark:border-zinc-700">
                            <IonItem lines="none" className="dark:[--background:transparent]">
                                <IonIcon icon={personCircleOutline} slot="start" color="medium" />
                                <IonLabel>
                                    <h2 className="font-semibold">Desarrollado por</h2>
                                    <p>Carlos Eduardo Guijosa Ramirez</p>
                                </IonLabel>
                            </IonItem>
                        </div>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default AcercaDe;
