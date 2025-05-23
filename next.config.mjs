import withNextIntl from 'next-intl/plugin';
import nextIntlConfig from './next-intl.config.js'; // или .ts, если tsconfig разрешает импорт TS в ESM

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: false,
    },
};

export default withNextIntl(nextIntlConfig)(nextConfig);
