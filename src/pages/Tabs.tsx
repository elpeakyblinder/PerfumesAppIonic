import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { homeOutline, flaskOutline, bookmarkOutline } from 'ionicons/icons';
import Inicio from './Inicio';
import Perfumes from './Perfumes';
import DetallePerfumes from './DetallePerfume';
import AgregarPerfumes from './AgregarPerfume';
import MisPerfumes from './MisPerfumes';
import AcercaDe from './Acerca';

const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Switch>
                    <Route exact path="/pages/inicio" component={Inicio} />
                    <Route exact path="/pages/perfumes" component={Perfumes} />
                    <Route path="/pages/perfumes/:id" component={DetallePerfumes} />
                    <Route exact path="/pages/agregar-perfume" component={AgregarPerfumes} />
                    <Route exact path="/pages/mis-perfumes" component={MisPerfumes} />
                    <Route exact path="/pages/acerca" component={AcercaDe} />

                    <Route exact path="/pages">
                        <Redirect to="/pages/inicio" />
                    </Route>
                </Switch>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="inicio" href="/pages/inicio">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Inicio</IonLabel>
                </IonTabButton>
                <IonTabButton tab="perfumes" href="/pages/perfumes">
                    <IonIcon icon={flaskOutline} />
                    <IonLabel>Perfumes</IonLabel>
                </IonTabButton>
                <IonTabButton tab="mis-perfumes" href="/pages/mis-perfumes">
                    <IonIcon icon={bookmarkOutline} />
                    <IonLabel>Mis Perfumes</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Tabs;
