const changeTheme = (theme) => {
  const html = document.documentElement;

  switch (theme) {
    case "white":
      localStorage.setItem("theme", theme);
      html.style.setProperty("--color-0", "#000");
      html.style.setProperty("--color-1", "#eaeaea");
      html.style.setProperty("--color-2", "#fff");
      html.style.setProperty("--color-3", "#c1c1c1");
      html.style.setProperty("--color-4", "#8d897d");
      html.style.setProperty("--color-5", "#f0ead6");
      html.style.setProperty("--color-6", "#cecacf");

      break;
    default:
      localStorage.setItem("theme", theme);
      html.style.setProperty("--color-0", "#fff");
      html.style.setProperty("--color-1", "#15202b");
      html.style.setProperty("--color-2", "#192734");
      html.style.setProperty("--color-3", "#164d56");
      html.style.setProperty("--color-4", "#1d6772");
      html.style.setProperty("--color-5", "#111921");
      html.style.setProperty("--color-6", "#51929c");
  }
};

export default changeTheme;
