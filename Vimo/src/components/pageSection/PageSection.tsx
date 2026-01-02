import { useState, useTransition, Suspense, createContext, useContext, useMemo, ReactNode } from "react";
import * as S from "./styles/PageSectionStyle";
import LoadingScreen from "../../pages/LoadingScreen";

const PageSectionContext = createContext<any>(null);

export function PageSection({ children, defaultTab = 'desc' }: { children: ReactNode, defaultTab?: string }) {
    const [activeTab, setActiveTab] = useState(defaultTab);
    const [isPending, startTransition] = useTransition();
    const value = useMemo(() => ({ activeTab, setActiveTab, isPending, startTransition }), [activeTab, isPending]);

    return (
        <PageSectionContext.Provider value={value}>
            <S.PageSectionContainer>
                <S.GallerySection>
                    <S.GalleryContainer>{children}</S.GalleryContainer>
                </S.GallerySection>
            </S.PageSectionContainer>
        </PageSectionContext.Provider>
    );
}

PageSection.Tabs = function ({ tabs }: { tabs: { id: string, label: string }[] }) {
    const { activeTab, setActiveTab, startTransition } = useContext(PageSectionContext);
    return (
        <S.GalleryList>
            {tabs.map((tab) => (
                <S.GalleryItem 
                    key={tab.id} 
                    $active={activeTab === tab.id}
                    onClick={() => startTransition(() => setActiveTab(tab.id))}
                >
                    {tab.label}
                </S.GalleryItem>
            ))}
        </S.GalleryList>
    );
};

PageSection.Panel = function ({ sections }: { sections: Record<string, ReactNode> }) {
    const { activeTab, isPending } = useContext(PageSectionContext);
    const activeSection = useMemo(() => sections[activeTab], [activeTab, sections]);

    return (
        <Suspense fallback={<LoadingScreen />}>
            <div style={{ opacity: isPending ? 0.6 : 1, transition: '0.3s' }}>
                {activeSection}
            </div>
        </Suspense>
    );
};