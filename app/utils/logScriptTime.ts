export function logScriptTime(label: string) {
  const el = document.getElementById("timeline")
  const time = performance.now().toFixed(1)

  if (el) {
    const item = document.createElement("div")
    item.innerText = `${time}ms — ${label}`
    el.appendChild(item)
  }
}