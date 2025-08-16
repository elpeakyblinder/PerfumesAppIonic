import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardTitle,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonButton
} from '@ionic/react';
import { heartDislike } from 'ionicons/icons';
import { getFavoritos, toggleFavorito, Perfume } from '../data/perfumes';

const MisFavoritos: React.FC = () => {
    const [favoritos, setFavoritos] = useState<Perfume[]>([]);

    useEffect(() => {
        const cargarFavoritos = () => {
            setFavoritos(getFavoritos());
        };
        cargarFavoritos();
        window.addEventListener('favoritosActualizados', cargarFavoritos);
        return () => {
            window.removeEventListener('favoritosActualizados', cargarFavoritos);
        };
    }, []);

    const handleQuitarFavorito = (id: number) => {
        toggleFavorito(id);
        setFavoritos(getFavoritos());
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Mis Favoritos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {favoritos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center">
                        <IonIcon icon={heartDislike} className="text-6xl text-gray-400 mb-4" />
                        <h2 className="text-xl font-semibold">Sin Favoritos</h2>
                        <p className="text-gray-500">Aún no has añadido ningún perfume a tu colección.</p>
                    </div>
                ) : (
                    <IonGrid>
                        <IonRow>
                            {favoritos.map(perfume => (
                                <IonCol size="6" key={perfume.id}>
                                    <IonCard className="relative overflow-hidden h-48 rounded-lg shadow-md group">
                                        {perfume.imagenSrc && (
                                            <IonImg
                                                src={perfume.imagenSrc}
                                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        )}
                                        <IonButton
                                            fill="clear"
                                            className="absolute top-1 right-1 z-20"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Evita que se active el click de la tarjeta
                                                handleQuitarFavorito(perfume.id);
                                            }}
                                        >
                                            <IonIcon slot="icon-only" icon={heartDislike} color="danger" />
                                        </IonButton>

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
                )}
            </IonContent>
        </IonPage>
    );
};

export default MisFavoritos;
