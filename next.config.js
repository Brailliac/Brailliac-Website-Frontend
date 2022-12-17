/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

const baseConfigs = {
  reactStrictMode: true,
};

module.exports = nextTranslate(baseConfigs);
