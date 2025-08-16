import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButtons, IonMenuButton, IonImg } from '@ionic/react';

import perfumes from '../assets/perfumes.png';

const Inicio: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Bienvenido a PerfumeApp</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonCard className="relative text-white overflow-hidden rounded-xl shadow-xl h-80">
                    <IonImg 
                        alt="Perfumes" 
                        src={perfumes} 
                        className="absolute top-0 left-0 w-full h-full object-cover" 
                    />
                    <div className="relative w-full h-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <h1 className="text-3xl font-bold drop-shadow-md">
                            Tu Diario de Fragancias
                        </h1>
                        <p className="mt-2 text-lg drop-shadow-md">
                            Explora, registra y encuentra tu aroma perfecto.
                        </p>
                    </div>
                </IonCard>

                <div className="mt-6 text-center font-light text-2xl">
                    <p>Explora la app y descubre tus fragancias favoritas.</p>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Inicio;
