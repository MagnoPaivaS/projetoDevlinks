function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // Se tivrer light mode, adiciona a imagem light

    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Magno P. Santos serio, usando óculos escuros."
    )
  } else {
    // Se não estiver light mode, adicona imagem normal

    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Magno P. Santos serio, usando óculos."
    )
  }

  // Substituir a imagem
}
