import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            "dark-low": string;
            "dark-medium": string;
            "dark-high": string;
            "magenta": string;

            "light-solid": string;
            "light-high": string;
        }
    }
}