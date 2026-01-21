import {
    useState,
    useTransition,
    Suspense,
    createContext,
    useContext,
    useMemo,
    ReactNode,
} from 'react';
import * as S from './styles/PageSectionStyle';
import LoadingScreen from '../../pages/LoadingScreen';
import MapaLeaflet from '../../atoms/map/Map';

// 1. Un solo contexto para Datos + Estado UI
const PageSectionContext = createContext<any>(null);

interface RestaurantDataType {
    address: string;
    email?: string;
    phone?: string;
    web?: string;
    id: string;
    name: string;
}

// Hook unificado para consumir el contexto
function usePageSection() {
    const context = useContext(PageSectionContext);
    if (!context) throw new Error('Los subcomponentes deben estar dentro de <PageSection />');
    return context;
}

interface PageSectionProps {
    data: RestaurantDataType | null | undefined;
    children: ReactNode;
    defaultTab?: string;
}

export function PageSection({ children, data, defaultTab = 'desc' }: PageSectionProps) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isPending, startTransition] = useTransition();

    const value = useMemo(
        () => ({
            activeTab,
            setActiveTab,
            isPending,
            startTransition,
            data,
        }),
        [activeTab, isPending, data]
    );

    return (
        <PageSectionContext.Provider value={value}>
            {!data ? (
                <LoadingScreen />
            ) : (
                <S.PageSectionContainer key={data.id}>
                    <S.GallerySection>
                        <S.GalleryContainer>{children}</S.GalleryContainer>
                    </S.GallerySection>
                </S.PageSectionContainer>
            )}
        </PageSectionContext.Provider>
    );
}

// 2. El subcomponente Tabs (Solo consume el contexto)
PageSection.Tabs = function ({ tabs }: { tabs: { id: string; label: string }[] }) {
    const { activeTab, setActiveTab, startTransition } = usePageSection();

    return (
        <S.GalleryList>
            {tabs.map((tab) => (
                <S.GalleryItem
                    key={tab.id}
                    $active={activeTab === tab.id}
                    onClick={() => startTransition(() => setActiveTab(tab.id))}>
                    {tab.label}
                </S.GalleryItem>
            ))}
        </S.GalleryList>
    );
};

PageSection.Panel = function ({ sections }: { sections: Record<string, ReactNode> }) {
    const context = usePageSection();
    if (!context) return null;
    const { activeTab, isPending } = context;
    const activeSection = useMemo(() => sections[activeTab], [activeTab, sections]);
    return (
        <Suspense fallback={<LoadingScreen />}>
            <div
                style={{
                    opacity: isPending ? 0.6 : 1,
                    transition: '0.3s ease-in-out',
                    pointerEvents: isPending ? 'none' : 'auto', // Evita clics mientras carga
                }}>
                {activeSection}
            </div>
        </Suspense>
    );
};

PageSection.Contact = function CardContact() {
    const context = usePageSection();
    if (!context || !context.data) return null;

    const { address, email, phone, web } = context.data;

    return (
        <S.Section>
            <S.ContactContent>
                <S.TitleInfo>Contacto</S.TitleInfo>
                <S.AboutText>
                    <S.IconInfo color="black">location_on</S.IconInfo>
                    {address}
                </S.AboutText>
                {email && (
                    <S.AboutText>
                        <S.IconInfo color="black">alternate_email</S.IconInfo>
                        {email}
                    </S.AboutText>
                )}
                {phone && (
                    <S.AboutText>
                        <S.IconInfo color="black">perm_phone_msg</S.IconInfo>
                        {phone}
                    </S.AboutText>
                )}
                {web && (
                    <S.AboutText>
                        <S.LinkText to={web} target="_blank">
                            <S.IconInfo color="black">web</S.IconInfo>
                            {web}
                        </S.LinkText>
                    </S.AboutText>
                )}
            </S.ContactContent>
        </S.Section>
    );
};
PageSection.Location = function CardLocation() {
    const context = usePageSection();
    if (!context || !context.data) return null;

    const { address } = context.data;

    return (
        <S.Section>
            <S.ContactContent>
                <S.TitleInfo>Ubicación</S.TitleInfo>
                <MapaLeaflet altura="300px" mensaje={address} />
                <S.MapContainer>
                    <S.AboutText>
                        <S.IconInfo color="black">location_on</S.IconInfo>
                        {address}
                    </S.AboutText>
                </S.MapContainer>
            </S.ContactContent>
        </S.Section>
    );
};
