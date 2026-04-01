<template>
  <section id="experiencia" class="section-card h-100">
    <div class="p-4 p-lg-4">
      <div class="section-icon mb-3">Perfil</div>

      <h2 class="h4 mb-3 fw-bold text-white">Experiencia y formacion</h2>

      <p class="mb-4 section-copy text-soft-custom">
        Mi experiencia se ha desarrollado a traves de proyectos academicos, personales y practica profesional,
        enfocandome en la creacion de aplicaciones web con PHP, Laravel, Vue.js y bases de datos relacionales.
      </p>

      <div class="timeline">
        <div class="timeline-item mb-4">
          <p class="small timeline-date mb-1">2025 - Actualidad</p>
          <h3 class="h6 mb-2 fw-semibold text-white">Practica profesional / Desarrollo Web</h3>
          <p class="mb-0 text-soft-custom">
            Participacion en el desarrollo y mantenimiento de sistemas web utilizando Laravel y Vue,
            apoyando en modulos CRUD, validaciones, conexion con base de datos, interfaces administrativas
            y mejoras funcionales.
          </p>
        </div>

        <div class="timeline-item mb-4">
          <p class="small timeline-date mb-1">2024 - 2025</p>
          <h3 class="h6 mb-2 fw-semibold text-white">Proyectos academicos y personales</h3>
          <p class="mb-0 text-soft-custom">
            Desarrollo de sistemas de gestion, reservas, inventario y paneles administrativos aplicando
            arquitectura MVC, autenticacion, relaciones entre tablas, consumo de APIs y diseno responsivo.
          </p>
        </div>
      </div>

      <hr class="my-4 divider" />

      <h3 class="h6 text-uppercase fw-bold mb-3 subtitle">Educacion</h3>

      <div class="education-item mb-3">
        <p class="small timeline-date mb-1">Formacion principal</p>
        <p class="mb-1 fw-semibold text-white">Tecnico en Desarrollo de Aplicaciones Web</p>
        <p class="mb-0 text-soft-custom">
          Formacion orientada al desarrollo full stack, bases de datos, logica de programacion,
          construccion de sistemas web y buenas practicas de desarrollo.
        </p>
      </div>

      <div class="education-item">
        <p class="small timeline-date mb-1">Formacion complementaria</p>
        <p class="mb-1 fw-semibold text-white">Especializacion practica en tecnologias web</p>
        <p class="mb-0 text-soft-custom">
          Profundizacion en Laravel, Vue.js, APIs REST, autenticacion, diseno de interfaces con Bootstrap
          y estructura de proyectos modernos con Vite.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-soft-custom {
  color: #e2e8f0 !important;
  line-height: 1.7;
}

.section-copy {
  max-width: 60ch;
}

.timeline {
  border-left: 2px solid rgba(96, 165, 250, 0.35);
  padding-left: 1rem;
}

.timeline-item {
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  left: -1.4rem;
  top: 0.3rem;
  background: #60a5fa;
  box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.12);
}

.timeline-date {
  color: #93c5fd !important;
  font-weight: 600;
}

.divider {
  border-color: rgba(148, 163, 184, 0.25);
}

.subtitle {
  color: #cbd5e1;
  letter-spacing: 0.08em;
}

.education-item {
  padding: 0.9rem 1rem;
  border-radius: 0.9rem;
  background: rgba(15, 23, 42, 0.55);
  border: 1px solid rgba(148, 163, 184, 0.2);
}
</style>
