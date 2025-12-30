import { useState, useTransition, Suspense, useMemo, useCallback } from "react";
import { 
    GalleryContainer, 
    GalleryItem, 
    GalleryList, 
    GallerySection, 
    PageSectionContainer
} from "./styles/PageSectionStyle";

import Description from "@components/descriptionSection/DescriptionSection";
import MenuSection from "@components/menuSection/MenuSection";
import ReviewSection from "@components/reviewSection/ReviewSection";

// 1. Definimos las secciones fuera para evitar recrear objetos en cada render
const SECTIONS_MAP: Record<string, React.ReactNode> = {
    desc: <Description />,
    menu: <MenuSection />,
    reviews: <ReviewSection />,
};

const TABS = [
    { id: 'desc', label: 'Descripción' },
    { id: 'menu', label: 'Menú' },
    { id: 'reviews', label: 'Opiniones' }
];

function GalleryNavbar() {
    const [activeTab, setActiveTab] = useState('desc');
    const [isPending, startTransition] = useTransition();

    // 2. useMemo: Mantiene la referencia del componente activo. 
    // Solo cambia si 'activeTab' cambia, ahorrando ciclos de CPU.
    const activeSection = useMemo(() => {
        return SECTIONS_MAP[activeTab] || SECTIONS_MAP.desc;
    }, [activeTab]);

    // 3. useCallback: Memoriza la función de cambio para no afectar el rendimiento de los hijos
    const handleTabChange = useCallback((id: string) => {
        startTransition(() => {
            setActiveTab(id);
        });
    }, []);

    return (
        <PageSectionContainer>
            <GallerySection>
                <GalleryContainer>
                    {/* Feedback visual con isPending para mejorar el INP (Interaction to Next Paint) */}
                    <GalleryList style={{ opacity: isPending ? 0.7 : 1, transition: 'opacity 0.2s' }}>
                        {TABS.map((tab) => (
                            <GalleryItem 
                                key={tab.id}
                                $active={activeTab === tab.id}
                                onClick={() => handleTabChange(tab.id)}
                            >
                                {tab.label}
                            </GalleryItem>
                        ))}
                    </GalleryList>

                    <Suspense fallback={<div style={{ height: '200px' }}>Cargando...</div>}>
                        <div style={{ 
                            opacity: isPending ? 0.6 : 1, 
                            transition: 'opacity 0.3s ease',
                            filter: isPending ? 'grayscale(0.5)' : 'none'
                        }}>
                            {activeSection}
                        </div>
                    </Suspense>
                </GalleryContainer>
            </GallerySection>
        </PageSectionContainer>
    );
}

export default GalleryNavbar;