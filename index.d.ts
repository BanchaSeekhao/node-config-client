declare module 'node-config-client'

type LoadOptions = {
    name: string,
    profiles: string[],
    label: string,
    location: string,
    user?: { name: string, password: string }
}

interface Config {
    get(key: string): string
}

export declare function load(options: LoadOptions): Promise<Config>;
