// next.config.mjs
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default config
