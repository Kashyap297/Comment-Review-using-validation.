import React, { useRef, useState } from 'react'

import './comreview.css'
const Comreview = () => {

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}/${month}/${year}`;
    let hour = date.getHours()
    let min = date.getMinutes()
    let currTime = `${hour}:${min}`

    const initialInput = {
        name: "",
        email: "",
        comment: "",
        rating: ""
    }

    const [input, setInput] = useState(initialInput);
    const [rating, setRating] = useState();
    const [errors, setErrrors] = useState({});
    const [datas, setDatas] = useState([]);
    const showRef = useRef(true)

    const showElement = () => {
        if (showRef.current) {
            showRef.current.style.display = 'block';
        }
    };

    const checkValidate = (input) => {
        const errors = {};
        if (input.name === "" || input.name === " ") {
            errors.name = "Required*";
        }
        if (input.email === "" || input.email === " ") {
            errors.email = "Required*";
        }
        if (input.comment === "" || input.comment === " ") {
            errors.comment = "Required*";
        }
        if (input.rating === "" || input.rating === " ") {
            errors.rating = "Required*";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const validate = checkValidate(input)
        setErrrors(validate)
        const check = Object.keys(validate)
        if (check.length < 1) {
            setDatas([...datas, input])
            setInput(initialInput)
            showElement();
        }
        // setRating('')
    }

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInput({ ...input, [key]: value });
        // setRating(e.target.value);
    }


    return (
        <>
            <main className='vh-100 d-flex align-items-center justify-content-center'>
                <div className="col-4 px-5">
                    <div className="card shadow-lg rounded p-4">
                        <form action="" onSubmit={handleSubmit}>
                            <h4 className='card-title mb-4 clr fw-bold text-center'>Company's Reviews</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="form-label ">Name :</label>
                                <div className="text-danger  mb-0">{errors && errors.name}</div>
                            </div>
                            <input type="text" name='name' className='p-2 form-control w-100 mb-2' placeholder='Name' value={input.name} onChange={handleChange} />

                            <div className="d-flex justify-content-between align-items-center">
                                <label htmlFor="" className="form-label">Email ID :</label>
                                <div className="text-danger">{errors && errors.email}</div>
                            </div>

                            <input type="email" name='email' className='form-control mb-2' placeholder='Email' value={input.email} onChange={handleChange} />

                            <div className="d-flex mt-2 justify-content-between align-items-center">
                                <label htmlFor="" className="form-label">Rating :</label>
                                <div className="text-danger">{errors && errors.rating}</div>
                            </div>
                            <select name="rating" id="" className='form-control' value={input.rating} onChange={handleChange}>
                                <option value={0} hidden className='form-control'>--Select Rating--</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                            {/* <div className="d-flex mt-2 justify-content-between align-items-center">
                                <label htmlFor="" className="form-label">Rating :</label>
                                <div className="text-danger">{errors && errors.rating}</div>
                            </div>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <div>
                                    <input type="radio" name="rating" id='choice1' checked={rating} value={1} className='' onChange={handleChange} /><label htmlFor="" className="ms-2">1</label>
                                </div>
                                <div>
                                    <input type="radio" name="rating" id='choice2' checked={rating} value={2} className='' onChange={handleChange} /><label htmlFor="" className="ms-2">2</label>
                                </div>
                                <div>
                                    <input type="radio" name="rating" id='choice3' checked={rating} value={3} className='' onChange={handleChange} /><label htmlFor="" className="ms-2">3</label>
                                </div>
                                <div>
                                    <input type="radio" name="rating" id='choice3' checked={rating} value={4} className='' onChange={handleChange} /><label htmlFor="" className="ms-2">4</label>
                                </div>
                                <div>
                                    <input type="radio" name="rating" id='choice3' checked={rating} value={5} className='' onChange={handleChange} /><label htmlFor="" className="ms-2">5</label>
                                </div>
                            </div> */}

                            <div className="d-flex mt-2 justify-content-between align-items-center">
                                <label htmlFor="" className="form-label">Comments :</label>
                                <div className="text-danger">{errors && errors.comment}</div>
                            </div>
                            <textarea id="" cols="30" rows="5" name='comment' className='form-control' placeholder="Comment Here...." value={input.comment} onChange={handleChange}></textarea>

                            <button className='btn w-100 text-white mt-3'>Comments</button>
                        </form>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-6 ref" ref={showRef}>
                    <div className="card p-2 height">
                        <div className="col-12">
                            <h1 className='text-center border-bottom fs-3 py-3 fw-bold clr-red'>Company's Reviews</h1>
                            {
                                datas.map(data => {
                                    return (
                                        <>
                                            <div className="p-3 border-bottom">
                                                <div className="card-title m-0 ">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className='fw-bold m-0 grey'>{data.name}</h5>
                                                        <span className='date'>{currentDate}  {currTime}</span>
                                                    </div>
                                                    <p className='grey'><i className="fa-solid fa-quote-left text-danger me-2 d-inline"></i>{data.comment}<i className="fa-solid fa-quote-right text-danger ms-2"></i></p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <h6 className='fb-clr d-inline m-0'><i className="fa-solid fa-at me-2 text-success"></i>{data.email}</h6>
                                                        <div className="rating-icon star">Rating : {data.rating}<i className="fa-solid fa-star ms-2"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Comreview