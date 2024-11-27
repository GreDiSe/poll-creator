export const theme = {
    colors: {
        black: '#000000',
        primary: '#27A98B',
        lightGray: '#F2EEEE',
        whiteSmoke: '#F8F8F8',
        white: '#fff',
        darkGray: '#818181',
        danger: '#E15241',
    },
};

export type Theme = typeof theme;
declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
