import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Filters = () => {
    const [open, setOpen] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <div className='filters sticky top-[75px] md:top-[95px] z-30  bg-white/[.90] py-3 px-5 flex flex-col items-center'>
            <div className='w-full  xl:max-w-[1200px]'>
                <div className="h-[80px] min-[585px]:h-[50px] flex gap-3 justify-between flex-wrap items-center ">
                    <div className='text-3xl'>
                        Todos los productos
                    </div>
                    <div className='flex gap-3 justify-end'>
                        <button className='py-1 px-4 bg-white'>Ver todos</button>
                        <button className='py-1 px-4 bg-white' onClick={toggleDrawer} >Filtrar por:</button>
                    </div>
                </div>

                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='p-6 z-50'
                >

                    <ul className="capitalize text-xl flex flex-col gap-5 pt-[50%]">
                        <li>
                            Tipo de Cabello
                            <ul className='text-lg pl-5'>
                                <li>· Lacio</li>
                                <li>· Rizado</li>
                                <li>· Muy Rizado</li>
                                <li>· Fino</li>
                                <li>· Ondulado</li>
                                <li>· Aclarado</li>
                                <li>· Teñido</li>
                                <li>· Cuero cabelludo graso</li>
                            </ul>
                        </li>
                        <li>
                            Tratamientos
                        </li>
                        <li>
                            Limpieza
                        </li>
                        <li>
                            Acondicionado
                        </li>
                        <li>
                            Peinado
                        </li>
                        <li>
                            Herramientas
                        </li>
                    </ul>
                </Drawer>

                {/* <div className="filterby  flex flex-wrap gap-3 justify-start mt-12 min-[564px]:mt-1 items-center">
                <button className='py-1 px-5 button-gray'>Tratamientos</button>
                <button className='py-1 px-5 button-gray'>Limpieza</button>
                <button className='py-1 px-5 button-gray'>Acondicionado</button>
                <button className='py-1 px-5 button-gray'>Peinado</button>
                <button className='py-1 px-5 button-gray'>Tipo de cabello</button>
                <button className='py-1 px-5 button-gray'>Herramientas</button>
                <button className='py-1 px-5 button-gray'>Otros</button>
            </div> */}
            </div>




            {/* <details className="collapse rounded-none collapse-arrow filterItem bg-gray-100">
                <summary className="collapse-title"><h2>Categorías</h2></summary>
                <div className="collapse-content bg-gray-100">
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">Shampoo</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">Acondicionador</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">Reparador</label>
                    </div>
                </div>
            </details>

            <details className="collapse rounded-none collapse-arrow filterItem bg-gray-100">
                <summary className="collapse-title"><h2>Marca</h2></summary>
                <div className="collapse-content bg-gray-100">
                    <div className="inputItem">
                        <input type="checkbox" id="4" value={4} />
                        <label htmlFor="4">Amika</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="5" value={5} />
                        <label htmlFor="5">Paul Mitchell</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="6" value={6} />
                        <label htmlFor="6">Olaplex</label>
                    </div>
                </div>
            </details> 

            <details className="collapse rounded-none collapse-arrow filterItem bg-gray-100">
                <summary className="collapse-title"><h2>Tipo de Cabello</h2></summary>
                <div className="collapse-content bg-gray-100">
                    <div className="inputItem">
                        <input type="checkbox" id="7" value={7} />
                        <label htmlFor="7">Lacio</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="8" value={8} />
                        <label htmlFor="8">Ondulado</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="9" value={9} />
                        <label htmlFor="9">Rizado</label>
                    </div>
                </div>
            </details>
            */}
        </div>
    )
}

export default Filters