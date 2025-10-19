export const colorPalette = {
    blueDeep: '#1f3a61',
    blueGray: '#497c92',
    cyanAccent: '#6ec1c4',
    orangeHot: '#f9a64e',
    redAlert: '#e83f21',
};


export const theme = {
    colors: colorPalette,
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    transitionDuration: '0.3s',
};

export type ThemeType = typeof theme;