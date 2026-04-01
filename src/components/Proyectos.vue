<template>
  <section id="proyectos" class="projects-section">
    <div class="projects-container">
      <div class="projects-header">
        <div class="section-icon">PR</div>
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="section-subtitle">
          Una seleccion de sistemas que he desarrollado para resolver problemas reales de gestion y operacion.
        </p>
      </div>

      <div class="projects-grid">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <div class="project-top">
            <h3 class="project-title">{{ project.title }}</h3>
            <a :href="project.url" target="_blank" rel="noopener" class="github-btn">Ver codigo</a>
          </div>

          <p class="project-description">{{ project.description }}</p>

          <ul class="project-points">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>

          <div class="badges">
            <span v-for="tech in project.stack" :key="tech" class="tech-badge">{{ tech }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Registro de Mascotas',
    url: 'https://github.com/nicosepul/registro-mascota.git',
    description: 'Sistema web para registrar mascotas, duenos y atenciones veterinarias.',
    points: [
      'CRUD completo y relaciones entre tablas',
      'Panel ordenado para seguimiento de atenciones',
      'Enfoque en estructura y claridad de datos',
    ],
    stack: ['Laravel', 'Vue', 'MySQL'],
  },
  {
    title: 'Gestor de Proyectos',
    url: 'https://github.com/nicosepul/Gestor-de-Proyectos',
    description: 'Aplicacion para administrar proyectos, tareas y estados de avance.',
    points: [
      'Control de estado por proyecto y tarea',
      'Flujo de actualizacion simple para usuarios',
      'Vista de trabajo enfocada en productividad',
    ],
    stack: ['Django', 'Python', 'MySQL'],
  },
  {
    title: 'Sistema de Bibliotecas',
    url: 'https://github.com/nicosepul/Sistema-de-Biblioteca',
    description: 'Sistema para gestionar libros, usuarios y prestamos de forma ordenada.',
    points: [
      'Control de disponibilidad y prestamos',
      'Registro centralizado de usuarios',
      'Flujo de gestion pensado para uso diario',
    ],
    stack: ['Django', 'Python', 'MySQL'],
  },
  {
    title: 'Reservas de Restaurante',
    url: 'https://github.com/nicosepul/Reserva-de-Restaurante',
    description: 'Plataforma para gestionar reservas, horarios y disponibilidad.',
    points: [
      'Agenda clara para mesas y turnos',
      'Menos errores de coordinacion diaria',
      'Interfaz simple para uso operativo',
    ],
    stack: ['Django', 'Python', 'MySQL'],
  },
]
</script>

<style scoped>
.projects-section {
  width: 100%;
  padding: 2rem 0;
}

.projects-container {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(2, 8, 23, 0.35);
  overflow: hidden;
}

.projects-header {
  margin-bottom: 1.5rem;
}

.section-icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.14);
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 700px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
}

.project-card {
  background: rgba(30, 41, 59, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.12);
  border-radius: 16px;
  padding: 1.25rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.35);
  box-shadow: 0 10px 24px rgba(2, 8, 23, 0.35);
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  overflow-wrap: anywhere;
}

.project-description {
  font-size: 0.95rem;
  color: #e2e8f0;
  line-height: 1.65;
  margin: 0;
}

.project-points {
  margin: 0;
  padding-left: 1.1rem;
  color: #cbd5e1;
  display: grid;
  gap: 0.25rem;
  font-size: 0.88rem;
}

.github-btn {
  display: inline-block;
  padding: 0.45rem 0.8rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.github-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  background: rgba(51, 65, 85, 0.95);
  color: #f8fafc;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 992px) {
  .github-btn {
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .projects-container {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .project-title {
    font-size: 1rem;
  }

  .project-description {
    font-size: 0.92rem;
  }

  .project-points {
    font-size: 0.84rem;
  }

  .tech-badge {
    font-size: 0.75rem;
    padding: 0.35rem 0.65rem;
  }
}
</style>
