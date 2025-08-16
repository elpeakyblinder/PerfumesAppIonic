import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonButtons, IonBackButton, IonAlert, IonIcon, IonImg, IonToast } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { camera, checkmarkCircleOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { agregarPerfume } from '../data/perfumes';

const AgregarPerfume: React.FC = () => {
    const history = useHistory();

    const [nombre, setNombre] = useState<string>('');
    const [notas, setNotas] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [foto, setFoto] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [showToast, setShowToast] = useState({ show: false, message: '', color: '' });

    const tomarFoto = async () => {
        try {
            const imagen = await Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Prompt
            });
            if (imagen.dataUrl) { setFoto(imagen.dataUrl); }
        } catch (error) {
            console.error("Error al tomar la foto", error);
            setShowToast({ show: true, message: 'No se pudo abrir la cámara.', color: 'danger' });
        }
    };

    const handleGuardar = () => {
        if (!nombre || !notas || !marca) {
            setShowAlert(true);
            return;
        }

        try {
            agregarPerfume({ nombre, notas, marca, imagenSrc: foto });
            setShowToast({ show: true, message: 'Perfume guardado con éxito', color: 'success' });

            setTimeout(() => {
                history.push('/pages/perfumes');
            }, 1500);
        } catch (error) {
            console.error("Error al guardar el perfume", error);
            setShowToast({ show: true, message: 'Error al guardar el perfume.', color: 'danger' });
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/pages/perfumes" />
                    </IonButtons>
                    <IonTitle>
                        Agregar Nuevo Perfume
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding bg-gray-50 dark:bg-zinc-900">
                <div className="space-y-6">

                    <IonItem lines="full" className="rounded-lg shadow-sm bg-white dark:bg-zinc-800">
                        <IonLabel position="floating" className="text-gray-800 dark:text-gray-200">
                            Nombre del Perfume
                        </IonLabel>
                        <IonInput value={nombre} onIonChange={e => setNombre(e.detail.value!)} />
                    </IonItem>

                    <IonItem lines="full" className="rounded-lg shadow-sm bg-white dark:bg-zinc-800">
                        <IonLabel position="floating" className="text-gray-800 dark:text-gray-200">
                            Notas
                        </IonLabel>
                        <IonTextarea value={notas} onIonChange={e => setNotas(e.detail.value!)} autoGrow={true} />
                    </IonItem>

                    <IonItem lines="full" className="rounded-lg shadow-sm bg-white dark:bg-zinc-800">
                        <IonLabel position="floating" className="text-gray-800 dark:text-gray-200">
                            Marca
                        </IonLabel>
                        <IonInput value={marca} onIonChange={e => setMarca(e.detail.value!)} />
                    </IonItem>

                    {foto && (
                        <div className="flex justify-center">
                            <IonImg src={foto} className="rounded-lg shadow-md w-48 h-48 object-cover" />
                        </div>
                    )}

                    <IonButton expand="block" fill="outline" onClick={tomarFoto}>
                        <IonIcon slot="start" icon={camera} />
                        <span className="dark:text-white">
                            Tomar/Seleccionar Foto
                        </span>
                    </IonButton>

                    <IonButton expand="block" color="success" onClick={handleGuardar}>
                        <IonIcon slot="start" icon={checkmarkCircleOutline} />
                        <span>
                            Guardar Perfume
                        </span>
                    </IonButton>
                </div>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Campos Incompletos'}
                    message={'Por favor, llena todos los campos.'}
                    buttons={['OK']}
                />

                <IonToast
                    isOpen={showToast.show}
                    onDidDismiss={() => setShowToast({ show: false, message: '', color: '' })}
                    message={showToast.message}
                    duration={2000}
                    color={showToast.color}
                />
            </IonContent>
        </IonPage>
    );
};

export default AgregarPerfume;
