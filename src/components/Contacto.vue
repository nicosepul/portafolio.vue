<template>
  <section id="contactame" class="card h-100 border-0 shadow-sm section-card text-light">
    <div class="card-body p-4 p-lg-5">
      <div class="section-icon mb-3">@</div>

      <h2 class="h3 mb-3 fw-bold section-title">Hablemos de tu proyecto u oportunidad</h2>

      <p class="section-copy mb-4">
        Si quieres trabajar conmigo, escribe por WhatsApp o correo. Tambien puedes completar el mensaje rapido
        y se abrira automaticamente con tu texto listo para enviar.
      </p>

      <div class="contact-actions mb-4">
        <a
          :href="whatsAppLink"
          target="_blank"
          rel="noopener"
          class="btn btn-success contact-btn primary-btn"
        >
          WhatsApp
        </a>

        <a
          :href="mailLink"
          class="btn btn-outline-light contact-btn secondary-btn"
        >
          Enviar correo
        </a>
      </div>

      <div class="quick-form mb-4">
        <h3 class="h6 fw-bold mb-3">Mensaje rapido</h3>

        <div class="row g-2">
          <div class="col-12 col-md-6">
            <label for="nombre" class="form-label small text-soft-label">Tu nombre</label>
            <input
              id="nombre"
              v-model.trim="name"
              type="text"
              class="form-control quick-input"
              placeholder="Ej: Maria Gomez"
            />
          </div>

          <div class="col-12 col-md-6">
            <label for="motivo" class="form-label small text-soft-label">Motivo</label>
            <select id="motivo" v-model="reason" class="form-select quick-input">
              <option value="Oferta laboral">Oferta laboral</option>
              <option value="Proyecto freelance">Proyecto freelance</option>
              <option value="Practica profesional">Practica profesional</option>
              <option value="Consulta general">Consulta general</option>
            </select>
          </div>

          <div class="col-12">
            <label for="mensaje" class="form-label small text-soft-label">Mensaje</label>
            <textarea
              id="mensaje"
              v-model.trim="message"
              class="form-control quick-input"
              rows="3"
              placeholder="Ej: Necesito apoyo para desarrollar una aplicacion web"
            ></textarea>
          </div>
        </div>

        <div class="d-flex flex-wrap gap-2 mt-3">
          <a :href="generatedWhatsAppLink" target="_blank" rel="noopener" class="btn btn-success quick-send-btn">
            Enviar por WhatsApp
          </a>
          <a :href="generatedMailLink" class="btn btn-outline-light quick-send-btn">
            Enviar por correo
          </a>
        </div>
      </div>

      <div class="contact-grid">
        <div class="contact-item">
          <span class="label">Correo</span>
          <a :href="mailLink" class="contact-link">{{ email }}</a>
        </div>

        <div class="contact-item">
          <span class="label">GitHub</span>
          <a :href="githubLink" target="_blank" rel="noopener" class="contact-link">
            github.com/nicosepul
          </a>
        </div>

        <div class="contact-item">
          <span class="label">LinkedIn</span>
          <a :href="linkedinLink" target="_blank" rel="noopener" class="contact-link">
            Ver perfil profesional
          </a>
        </div>

        <div class="contact-item">
          <span class="label">WhatsApp</span>
          <a :href="whatsAppLink" target="_blank" rel="noopener" class="contact-link">
            +56 9 4806 9597
          </a>
        </div>
      </div>

      <div class="contact-highlight mt-4">
        <p class="mb-2 fw-semibold">Disponible para oportunidades como desarrollador web.</p>
        <p class="mb-0 small contact-note">
          Ideal para reclutadores, empresas y proyectos freelance.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const phoneNumber = '56948069597'
const email = 'nicolaschepo@gmail.com'
const githubLink = 'https://github.com/nicosepul'
const linkedinLink = 'https://www.linkedin.com/in/nicolas-sepulveda-mu%C3%B1oz-'

const whatsAppLink = `https://wa.me/${phoneNumber}?text=Hola%20Nicolas,%20vi%20tu%20portafolio%20y%20me%20gustaria%20contactarte.`
const mailLink = `mailto:${email}`

const name = ref('')
const reason = ref('Oferta laboral')
const message = ref('Hola Nicolas, me interesa conversar contigo.')

const finalMessage = computed(() => {
  const contactName = name.value || 'Hola'
  const note = message.value || 'Me gustaria obtener mas informacion.'
  return `${contactName}: ${reason.value}. ${note}`
})

const generatedWhatsAppLink = computed(() => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage.value)}`
})

const generatedMailLink = computed(() => {
  const subject = encodeURIComponent(`Contacto desde portafolio: ${reason.value}`)
  const body = encodeURIComponent(finalMessage.value)
  return `mailto:${email}?subject=${subject}&body=${body}`
})
</script>

<style scoped>
.section-card {
  border-radius: 1.2rem;
  background: linear-gradient(160deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.92));
  border: 1px solid rgba(148, 163, 184, 0.18);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.section-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 1rem 2rem rgba(2, 6, 23, 0.35);
}

.section-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  display: grid;
  place-content: center;
  color: #34d399;
  background: rgba(52, 211, 153, 0.14);
  font-weight: 700;
  font-size: 1rem;
}

.section-title {
  color: #ffffff;
}

.section-copy {
  color: #e2e8f0;
  font-size: 1rem;
  line-height: 1.7;
  max-width: 60ch;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.quick-form {
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.9rem;
  padding: 1rem;
  background: rgba(8, 15, 31, 0.55);
}

.text-soft-label {
  color: #cbd5e1;
}

.quick-input {
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(148, 163, 184, 0.35);
  color: #f8fafc;
}

.quick-input::placeholder {
  color: #94a3b8;
}

.quick-input:focus {
  background: rgba(15, 23, 42, 0.98);
  color: #f8fafc;
  border-color: rgba(52, 211, 153, 0.55);
  box-shadow: 0 0 0 0.2rem rgba(52, 211, 153, 0.2);
}

.quick-send-btn {
  min-width: 190px;
}

.contact-btn {
  min-width: 180px;
  font-weight: 600;
  border-radius: 0.8rem;
  padding: 0.8rem 1rem;
}

.primary-btn {
  box-shadow: 0 0.5rem 1rem rgba(34, 197, 94, 0.25);
}

.secondary-btn {
  border-color: rgba(255, 255, 255, 0.35);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.contact-item {
  padding: 1rem;
  border-radius: 0.9rem;
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.16);
  min-width: 0;
}

.label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  margin-bottom: 0.4rem;
  font-weight: 700;
}

.contact-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  overflow-wrap: anywhere;
  word-break: break-word;
  line-height: 1.45;
}

.contact-link:hover {
  color: #34d399;
}

.contact-highlight {
  padding: 1rem 1.1rem;
  border-radius: 0.9rem;
  background: rgba(52, 211, 153, 0.08);
  border: 1px solid rgba(52, 211, 153, 0.18);
  color: #ffffff;
}

.contact-note {
  color: #cbd5e1;
}

@media (max-width: 768px) {
  .section-copy {
    font-size: 0.95rem;
  }

  .contact-btn {
    width: 100%;
    min-width: 0;
  }

  .contact-item {
    padding: 0.9rem;
  }

  .contact-link {
    font-size: 0.95rem;
  }

  .quick-form {
    padding: 0.9rem;
  }

  .quick-send-btn {
    width: 100%;
    min-width: 0;
  }
}
</style>
