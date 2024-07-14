export function getRandomLightColor() {
  const loggedUserMessage = '#005c4b'
  const otherUserMessage = '#353535'

  let color
  do {
    color = generateRandomLightColor()
  } while (isColorTooClose(color, loggedUserMessage) || isColorTooClose(color, otherUserMessage))

  return color
}

// Function to generate random light color
function generateRandomLightColor() {
  const r = Math.floor(Math.random() * 106) + 150 // 150-255
  const g = Math.floor(Math.random() * 106) + 150 // 150-255
  const b = Math.floor(Math.random() * 106) + 150 // 150-255
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}
// Function to compare two colors
function isColorTooClose(color1: string, color2: string) {
  const [r1, g1, b1] = hexToRgb(color1)
  const [r2, g2, b2] = hexToRgb(color2)

  // Compute the distance between colors in RGB space
  const distance = Math.sqrt(Math.pow(r2 - r1, 2) + Math.pow(g2 - g1, 2) + Math.pow(b2 - b1, 2))

  return distance < 100 // Adjust threshold as needed
}

// Function to convert hex to RGB
function hexToRgb(hex: string) {
  let bigint = parseInt(hex.slice(1), 16)
  let r = (bigint >> 16) & 255
  let g = (bigint >> 8) & 255
  let b = bigint & 255
  return [r, g, b]
}
