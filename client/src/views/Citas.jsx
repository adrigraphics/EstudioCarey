import React from 'react'

export default function Citas() {
  return (
    <div id="citas" className="min-h-screen animate__animated animate__fadeIn animate__slower flex justify-center bg-white">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl dm-serif mt-24 mb-12 font-bold">Reserva una Cita</h1>
      <iframe className="min-[835px]:w-[800px]" src="https://app.acuityscheduling.com/schedule.php?owner=29325437" title="Reservar cita" width="100%" height="900" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
    </div>
  </div>
</div>
  )
}
