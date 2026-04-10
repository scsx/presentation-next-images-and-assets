const start = performance.now()

export function logScriptTime(label: string) {
  const el = document.getElementById("timeline")
  const delta = (performance.now() - start).toFixed(1)

  if (el) {
    const item = document.createElement("div")
    item.innerText = `+${delta}ms — ${label}`

    // 🎯 highlight único
    if (label.includes("UI ready")) {
      item.style.background = "green"
      item.style.color = "white"
      item.style.fontWeight = "bold"
      item.style.padding = "4px 6px"
      item.style.display = "inline-block"
    }

    el.appendChild(item)
  }
}