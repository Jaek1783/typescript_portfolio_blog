/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

module.exports = {
  env : {
    mongodb_username : 'user',
    mongodb_password : 'KS8rRWPlv1fF4gUX',
    mongodb_clustername : 'contact',
    mongodb_database : 'Contact',

  }
}