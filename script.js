const translations = {
    en: {
      title: "Welcome",
      description: "This is an example site",
    },
    fr: {
      title: "Bienvenue",
      description: "Ceci est un exemple de site",
    },
  };
  
  function setLanguage(lang) {
    document.getElementById('title').innerText = translations[lang].title;
    document.getElementById('description').innerText = translations[lang].description;
  }
  
  // Langue par défaut
  setLanguage('en');
  