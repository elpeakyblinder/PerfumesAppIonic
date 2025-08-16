import React, { useState, useEffect } from 'react';
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonButtons, 
    IonBackButton, 
    IonButton, 
    IonIcon, 
    IonToast,
    IonItem,
    IonLabel,
    IonImg
} from '@ionic/react';
import { useParams } from 'react-router-dom';
import { heart, heartOutline, leafOutline, pricetagOutline } from 'ionicons/icons';
import { getPerfumePorId, esFavorito, toggleFavorito, Perfume } from '../data/perfumes';

interface DetallePerfumeParams {
    id: string;
}

const DetallePerfume: React.FC = () => {
    const { id } = useParams<DetallePerfumeParams>();
    const perfume = getPerfumePorId(parseInt(id));

    const [esFav, setEsFav] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        setEsFav(esFavorito(parseInt(id)));
    }, [id]);

    const handleToggleFavorito = () => {
        toggleFavorito(parseInt(id));
        setEsFav(!esFav);
        setShowToast(true);
    };

    if (!perfume) {
        return <IonPage><IonContent><p>Perfume no encontrado</p></IonContent></IonPage>;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/pages/perfumes" />
                    </IonButtons>
                    <IonTitle>{perfume.nombre}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleToggleFavorito}>
                            <IonIcon slot="icon-only" icon={esFav ? heart : heartOutline} color="danger" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard className="overflow-hidden rounded-xl shadow-lg dark:bg-zinc-800 dark:border dark:border-zinc-700">
                    {perfume.imagenSrc && <IonImg src={perfume.imagenSrc} alt={perfume.nombre} />}
                    <IonCardHeader>
                        <IonCardTitle className="text-2xl font-bold">{perfume.nombre}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <IonItem lines="none" className="mb-2 dark:[--background:transparent]">
                            <IonIcon icon={leafOutline} slot="start" color="medium" />
                            <IonLabel>
                                <h2 className="font-semibold">Notas</h2>
                                <p className="whitespace-normal">{perfume.notas}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="dark:[--background:transparent]">
                            <IonIcon icon={pricetagOutline} slot="start" color="medium" />
                            <IonLabel>
                                <h2 className="font-semibold">Marca</h2>
                                <p>{perfume.marca}</p>
                            </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={esFav ? "Añadido a favoritos" : "Quitado de favoritos"}
                    duration={2000}
                />
            </IonContent>
        </IonPage>
    );
};

export default DetallePerfume;
