import React from 'react'

const Filters = () => {
    return (
        <div>
            <details className="collapse rounded-none collapse-arrow filterItem bg-gray-100">
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
        </div>
    )
}

export default Filters