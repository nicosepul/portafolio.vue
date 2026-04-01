<template>
  <div class="site-shell">
    <a href="#contenido" class="skip-link">Saltar al contenido principal</a>
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>

    <header class="app-nav navbar navbar-expand-lg navbar-dark sticky-top">
      <div class="container py-2">
        <RouterLink to="/" class="navbar-brand brand-mark">Portafolio Profesional</RouterLink>

        <RouterLink to="/contacto" class="contact-cta-nav">
          Contactar
        </RouterLink>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="mainNav" class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto gap-lg-2">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link fw-semibold nav-link-modern">Inicio</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/perfil" class="nav-link fw-semibold nav-link-modern">Perfil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/proyectos" class="nav-link fw-semibold nav-link-modern">Proyectos</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contacto" class="nav-link fw-semibold nav-link-modern">Contacto</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main id="contenido" class="container page-content py-4 py-lg-5">
      <router-view />
    </main>

    <footer class="app-footer mt-4">
      <div class="container py-4 d-flex flex-column flex-md-row justify-content-between gap-2">
        <p class="mb-0 text-soft small">Nicolas Sepulveda Munoz · Portafolio Web</p>
        <p class="mb-0 text-soft small">Disponible para oportunidades laborales y proyectos freelance</p>
      </div>
    </footer>

    <RouterLink to="/contacto" class="floating-contact-btn" aria-label="Ir a contacto">
      Hablemos
    </RouterLink>
  </div>
</template>
