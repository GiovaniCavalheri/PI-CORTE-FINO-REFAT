
    const elementos = document.querySelectorAll(
      ".secao-contato, .card-whats, .informacoes-container"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    });

    elementos.forEach((el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(30px)";
      el.style.transition = "0.6s";
      observer.observe(el);
    });