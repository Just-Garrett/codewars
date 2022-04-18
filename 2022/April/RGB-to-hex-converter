// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

function rgb(r, g, b){
  r < 0 ? r = 0 : r > 255 ? r = 255 : r
  g < 0 ? g = 0 : g > 255 ? g = 255 : g
  b < 0 ? b = 0 : b > 255 ? b = 255 : b
  r = r.toString(16).toUpperCase()
  g = g.toString(16).toUpperCase()
  b = b.toString(16).toUpperCase()
  if (r.length < 2) {r = '0' + r}
  if (g.length < 2) {g = '0' + g}
  if (b.length < 2) {b = '0' + b}
  return r + g + b
}