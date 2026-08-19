import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',

    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },

    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};

export default config;