"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  webpack5: true
};

var _require = require('@expo/next-adapter'),
    withExpo = _require.withExpo;

var withImages = require('next-images');

var withPlugins = require('next-compose-plugins');

var withTM = require('next-transpile-modules')(['solito', 'dripsy', '@dripsy/core', 'moti', '@motify/core', '@motify/components', 'app']);

module.exports = withPlugins([withTM, [withExpo, {
  projectRoot: __dirname
}]], nextConfig, {
  images: {
    domains: ['assets.example.com']
  }
});