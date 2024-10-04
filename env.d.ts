declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MONGOURI: string;
        }
    }
}
export{}