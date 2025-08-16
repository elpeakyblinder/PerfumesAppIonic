import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonImg,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { getTodosPerfumes, Perfume } from '../data/perfumes';

const Perfumes: React.FC = () => {
    const [perfumes, setPerfumes] = useState<Perfume[]>([]);

    useEffect(() => {
        const cargarPerfumes = () => {
            setPerfumes(getTodosPerfumes());
        };

        cargarPerfumes();
        window.addEventListener('perfumesActualizados', cargarPerfumes);

        return () => {
            window.removeEventListener('perfumesActualizados', cargarPerfumes);
        };
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Perfumes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonGrid>
                    <IonRow>
                        {perfumes.map(perfume => (
                            <IonCol size="6" key={perfume.id}>
                                <IonCard button routerLink={`/pages/perfumes/${perfume.id}`} className="relative overflow-hidden h-48 rounded-lg shadow-md group bg-white dark:bg-zinc-900">
                                    {perfume.imagenSrc && (
                                        <div className="p-2 w-full h-full">
                                            <IonImg
                                                src={perfume.imagenSrc}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    )}
                                    <div className="absolute bottom-0 left-0 w-full p-2 text-white bg-gradient-to-t from-black/70 to-transparent z-10">
                                        <h2 className="text-sm font-bold text-center truncate">
                                            {perfume.nombre}
                                        </h2>
                                    </div>
                                </IonCard>
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton routerLink="/pages/agregar-perfume">
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    );
};

export default Perfumes;
