import React from 'react'

export default function FAQ() {
  return (
    <div id="faq" className="nunito hero animate__animated animate__fadeIn animate__slower min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl max-w-sm font-bold">
            <span className="dm-serif">F.A.Q.</span>
            <br />
            <br />
            Envíos y devoluciones
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="collapse collapse-arrow  bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title bg-black text-white mb-3 rounded-full font-bold text-lg">
                ¿Cuánto tardaré en recibir mi pedido?
              </div>
              <div className="collapse-content">
                <p className="font-bold">Existen 2 formas de recibir tu pedido:</p>

                <br />
                <ul>
                  <li>1. Recogiendo directamente en el estudio. Tú eliges la fecha de recolección, puede ser en tu siguiente cita conmigo o puedes venir antes al estudio, solo escribe la fecha en el formulario de compra. Podrás recogerlo a partir de 3 días después de la fecha de pago.</li>
                  <br />
                  <li>2. Con servicio de paquetería valido únicamente dentro de Tijuana. Tiene un costo extra de $120 y no hay límite de peso. Se envía 3 días después de la fecha de pago.</li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow  bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title bg-black text-white mb-3 rounded-full font-bold text-lg">
                ¿Ofreces envíos nacionales?
              </div>
              <div className="collapse-content">
                <p>Por el momento no :( espéralo pronto.</p>
              </div>
            </div>
            <div className="collapse collapse-arrow  bg-white">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title bg-black text-white mb-3 rounded-full font-bold text-lg">
                ¿Cuál es la política de devoluciones?
              </div>
              <div className="collapse-content">
                <p>Las herramientas tienen garantía de 15 días si presentan defectos de fabrica (además de la garantía propia de la marca). Por favor tráelas con nosotras para llevarlas a revisión y cambiarla por una nueva o darte un rembolso. En el caso de ofertas o liquidación no aceptamos devoluciones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
