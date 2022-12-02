// @ts-ignore
import jwt from 'jsonwebtoken'
import * as sharp from 'sharp'

export default defineEventHandler(async () => {
  const token = jwt.sign({ user: 1 }, 'secret')

  const semiTransparentRedPng = await sharp({
    create: {
      width: 48,
      height: 48,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 }
    }
  })
    .png()
    .toBuffer()

  return `<h1>nitro is amazing! ${token}</h1> ${semiTransparentRedPng}`
})
