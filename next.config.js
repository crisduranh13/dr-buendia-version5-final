/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite verificar en paralelo sin interferir con otro servidor local abierto.
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

module.exports = nextConfig;
