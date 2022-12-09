import React, { useState } from 'react';
import { Calendar } from 'react-calendar';
import { useLoaderData } from 'react-router-dom';
import './Selector.css'

const Selector = () => {
    const post = useLoaderData()
    const {ditiels,name} = post
    const [value, onChange] = useState(new Date());
    return (
        <div className="bg-sectlet">
            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="selector-text">
                            <h1>{name}</h1>
                            <p>{ditiels}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="selector-clander">
                            <div className="selector-lavel">
                                <label htmlFor="country">Origin</label>
                                <select name="country">
                                    <option value="1">Selector</option>
                                    <option value="1">Dhaka</option>
                                    <option value="1">Khunla</option>
                                    <option value="1">Sreemangal</option>
                                    <option value="1">Brishal</option>
                                </select>
                            </div>
                            <div className="selector-lavel">
                                <label htmlFor="country">Destination</label>
                                <select name="country">
                                    <option value="1">Selector</option>
                                    <option value="1">Dhaka</option>
                                    <option value="1">Khunla</option>
                                    <option value="1">Sreemangal</option>
                                    <option value="1">Brishal</option>
                                </select>
                            </div>
                            <div className="clandar">
                                <Calendar onChange={onChange} value={value}></Calendar>
                            </div>
                            <button className='booking'>Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selector;