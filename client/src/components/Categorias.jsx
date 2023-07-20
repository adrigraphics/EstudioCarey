import React from 'react'
import '../index.css';
import { Link } from "react-router-dom"


const Categorias = () => {
    return (
        <div className='categorias'>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className="link no-underline" to="/productos/1">
                            Sale
                        </Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className="link no-underline" to="/productos/2">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className="link no-underline" to="/productos/3">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className="link no-underline" to="/productos/4">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <button>
                                <Link className="link no-underline" to="/productos/5">
                                    Sale
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/14131901/pexels-photo-14131901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <button>
                        <Link className="link no-underline" to="/productos/6">
                            Sale
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categorias