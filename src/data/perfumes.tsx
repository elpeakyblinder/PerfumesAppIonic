import megamare from '../assets/megamare.png';
import lastBirthday from '../assets/last.png';
import erbapura from '../assets/erbapura.png';

export interface Perfume {
    id: number;
    nombre: string;
    notas: string;
    marca: string;
    imagenSrc?: string | null;
}

// Base de datos hardcodeada para perfumes iniciales
const perfumesIniciales: Perfume[] = [
    { id: 1, nombre: 'Megamare', notas: 'Notas acuáticas, sal, algas, ámbar gris y almizcle.', marca: 'Orto Parisi', imagenSrc: megamare },
    { id: 2, nombre: 'The Last Birthday Cake', notas: 'Pastel, leche, velas apagadas, pólvora y notas metálicas.', marca: 'Toskovat\'', imagenSrc: lastBirthday },
    { id: 3, nombre: 'Erba Pura', notas: 'Naranja siciliana, bergamota, limón, frutas, almizcle blanco y vainilla.', marca: 'Xerjoff', imagenSrc: erbapura },
];

export const getTodosPerfumes = (): Perfume[] => {
    const perfumesGuardados = JSON.parse(localStorage.getItem('perfumes-usuario') || '[]');
    return [...perfumesIniciales, ...perfumesGuardados];
};

export const getPerfumePorId = (id: number): Perfume | undefined => {
    return getTodosPerfumes().find(p => p.id === id);
};

export const agregarPerfume = (perfumeData: Omit<Perfume, 'id'>) => {
    const perfumesGuardados = JSON.parse(localStorage.getItem('perfumes-usuario') || '[]');
    const nuevoPerfume: Perfume = {
        id: Date.now(),
        ...perfumeData,
    };
    perfumesGuardados.push(nuevoPerfume);
    localStorage.setItem('perfumes-usuario', JSON.stringify(perfumesGuardados));
    window.dispatchEvent(new Event('perfumesActualizados'));
};


// --- FUNCIONES PARA MANEJAR FAVORITOS ---

const getFavoritosIds = (): number[] => {
    return JSON.parse(localStorage.getItem('perfumes-favoritos') || '[]');
};

export const esFavorito = (id: number): boolean => {
    return getFavoritosIds().includes(id);
};

export const toggleFavorito = (id: number) => {
    let favoritosIds = getFavoritosIds();
    if (esFavorito(id)) {
        favoritosIds = favoritosIds.filter(favId => favId !== id);
    } else {
        favoritosIds.push(id);
    }
    localStorage.setItem('perfumes-favoritos', JSON.stringify(favoritosIds));
    window.dispatchEvent(new Event('favoritosActualizados'));
};

export const getFavoritos = (): Perfume[] => {
    const favoritosIds = getFavoritosIds();
    const todosLosPerfumes = getTodosPerfumes();
    return todosLosPerfumes.filter(perfume => favoritosIds.includes(perfume.id));
};