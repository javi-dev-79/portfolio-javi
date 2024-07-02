declare module 'i18next' {
    interface Resources {
        translation: {
            [key: string]: string
        }
    }

    interface InitOptions extends i18n.InitOptions {
        resources: {
            en: Resources
            es: Resources
            fr: Resources
            de: Resources
        }
    }

    interface i18n {
        changeLanguage(lng: string): Promise<i18n>
        t(key: string, options?: object): string
        init(options?: Partial<InitOptions>): Promise<i18n>
    }

    const i18n: i18n
    export default i18n
}
