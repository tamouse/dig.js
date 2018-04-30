module.exports = function dig(obj, trail) {
  let legs = trail.split(".")
  let current = obj

  while (legs.length > 0 && current != null && typeof current === "object") {
    let leg = legs.shift()
    current = current[leg]
  }

  return current
}
