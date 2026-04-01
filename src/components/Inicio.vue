<template>
  <div>
    <header id="inicio" class="hero-wrap pb-4">
      <div class="row g-4 align-items-stretch">
        <div class="col-12 col-lg-7">
          <div class="contact-hero-card h-100 p-4 p-lg-5 panel">
            <span class="badge rounded-pill px-3 py-2 mb-3 hero-badge">Disponible</span>
            <h1 class="display-5 fw-bold mb-3 hero-title">Desarrollo soluciones web claras, rapidas y enfocadas en resultados</h1>
            <p class="lead mb-4 hero-copy text-soft">
              Soy Analista Programador egresado de INACAP. Ayudo a empresas y equipos a crear sistemas web ordenados,
              funcionales y faciles de mantener con Laravel, Vue, Python y SQL.
            </p>

            <div class="d-flex flex-wrap gap-2 mb-3">
              <a :href="whatsAppLink" target="_blank" rel="noopener" class="btn btn-success btn-lg px-4">Escribirme por WhatsApp</a>
              <a :href="'mailto:' + email" class="btn btn-outline-light btn-lg px-4">Enviar correo</a>
            </div>

            <div class="hero-metrics mb-3" aria-label="Indicadores de perfil">
              <div class="metric-item">
                <p class="metric-value mb-0">4+</p>
                <p class="metric-label mb-0">Proyectos completos</p>
              </div>
              <div class="metric-item">
                <p class="metric-value mb-0">3</p>
                <p class="metric-label mb-0">Stacks principales</p>
              </div>
              <div class="metric-item">
                <p class="metric-value mb-0">24h</p>
                <p class="metric-label mb-0">Tiempo estimado de respuesta</p>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-2 social-links">
              <a :href="githubLink" target="_blank" rel="noopener" class="btn btn-sm btn-social">Ver GitHub</a>
              <a :href="linkedinLink" target="_blank" rel="noopener" class="btn btn-sm btn-social">Ver LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-5">
          <div class="profile-card h-100 panel">
            <img class="profile-image" :src="profileImage" alt="Foto de Nicolas Sepulveda" />
            <div class="profile-caption">
              <p class="mb-1 text-uppercase small text-soft">Perfil Profesional</p>
              <h2 class="h5 fw-bold mb-1">Nicolas Sepulveda Munoz</h2>
              <p class="mb-0 text-soft">Analista Programador | INACAP</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="resumen" class="py-3">
      <div class="row g-4">
        <div class="col-12 col-lg-4">
          <div class="content-card p-4 h-100 panel-soft">
            <h3 class="h5 fw-bold mb-3 text-info">Perfil Profesional</h3>
            <p class="small text-soft mb-0">Egresado de INACAP, con formacion en programacion, bases de datos y pruebas de software. Poseo certificaciones en desarrollo de aplicaciones y soporte computacional. Cuento con experiencia laboral que ha fortalecido mis habilidades de responsabilidad, atencion al detalle y resolucion de problemas.</p>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="content-card p-4 h-100 panel-soft">
            <h3 class="h5 fw-bold mb-3 text-info">Educacion</h3>
            <div class="mb-2">
              <p class="fw-semibold mb-0">Analista Programador</p>
              <p class="small text-soft mb-0">INACAP, Valparaiso | 2023 - 2025 (Egresado)</p>
            </div>
            <div>
              <p class="fw-semibold mb-0">Ensenanza Media Completa</p>
              <p class="small text-soft mb-0">Liceo Bicentenario, Vina del Mar | 2019</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="content-card p-4 h-100 panel-soft">
            <h3 class="h5 fw-bold mb-3 text-info">Proyectos Academicos</h3>
            <ul class="list-unstyled small text-soft mb-0">
              <li class="mb-2"><strong>Gestor de Tareas:</strong> SPA en React con CRUD y Local Storage.</li>
              <li class="mb-2"><strong>CRUD MongoDB:</strong> Operaciones avanzadas y subdocumentos.</li>
              <li class="mb-2"><strong>QA con Pytest:</strong> Automatizacion de pruebas unitarias.</li>
              <li><strong>Tienda Web:</strong> Carrito dinamico en JS y plan de pruebas.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const phoneNumber = '56948069597'
const email = 'nicolaschepo@gmail.com'
const githubLink = 'https://github.com/nicosepul'
const linkedinLink = 'https://www.linkedin.com/in/nicolas-sepulveda-mu%C3%B1oz-'

const whatsAppLink = `https://wa.me/${phoneNumber}?text=Hola%20Nicolas,%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte.`
const profileImage = `${import.meta.env.BASE_URL}images/nicolas-perfil.jpg`
</script>

<style scoped>
.hero-title {
  line-height: 1.1;
}

.contact-hero-card {
  background: linear-gradient(160deg, rgba(8, 15, 31, 0.82), rgba(13, 23, 43, 0.86));
}

.hero-badge {
  border: 1px solid rgba(148, 163, 184, 0.28);
  background-color: rgba(15, 23, 42, 0.82);
  color: #e2e8f0;
}

.hero-copy {
  max-width: 65ch;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.6rem;
}

.metric-item {
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(148, 163, 184, 0.26);
  background: rgba(15, 23, 42, 0.55);
}

.metric-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #7dd3fc;
}

.metric-label {
  font-size: 0.8rem;
  color: #cbd5e1;
}

.btn-social {
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: #dbeafe;
  background: rgba(30, 41, 59, 0.45);
}

.btn-social:hover {
  color: #0f172a;
  background: #e2e8f0;
}

.profile-card {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.profile-image {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.profile-caption {
  padding: 1rem 1.25rem 1.25rem;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(2, 6, 23, 0.42);
}

.content-card {
  background: rgba(30, 41, 59, 0.22);
}

@media (max-width: 991px) {
  .hero-title {
    font-size: 2.1rem;
  }

  .profile-image {
    height: 290px;
  }
}
</style>
