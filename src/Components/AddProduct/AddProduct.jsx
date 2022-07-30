import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import './AddProduct.css'
import axios from 'axios'
import { config } from '../../config'

const AddProduct = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            prod_img: '',
            prod_name: '',
            prod_rating: '',
            prod_clr: '',
            prod_rom: '',
            prod_ram: '',
            prod_price: '',
            prod_cus_count: '',
            prod_price_with_offer: '',
            prod_website: '',
            prod_cat: ''
        },

        validate: (values) => {
            const errors = {}

            if (values.prod_img.length == 0) {
                errors.prod_img = "Required"
            } else if (values.prod_img.length < 15) {
                errors.prod_img = "Character should be morethan 15"
            }
            if (values.prod_name.length == 0) {
                errors.prod_name = "Required"
            } else if (values.prod_name.length < 5) {
                errors.prod_name = "Character should be morethan 5"
            }
            if (values.prod_rating.length == 0) {
                errors.prod_rating = "Required"
            }
            if (values.prod_clr.length == 0) {
                errors.prod_clr = "Required"
            } else if (values.prod_clr.length < 4) {
                errors.prod_clr = "Character should be morethan 4"
            }
            if (values.prod_rom.length == 0) {
                errors.prod_rom = "Required"
            }
            if (values.prod_ram.length == 0) {
                errors.prod_ram = "Required"
            }
            if (values.prod_price.length == 0) {
                errors.prod_price = "Required"
            }
            if (values.prod_cus_count.length == 0) {
                errors.prod_cus_count = "Required"
            }
            if (values.prod_price_with_offer.length == 0) {
                errors.prod_price_with_offer = "Required"
            }
            if (values.prod_website.length == 0) {
                errors.prod_website = "Required"
            } else if (values.prod_website.length < 6) {
                errors.prod_website = "Character should be morethan 6"
            }
            if (!values.prod_cat) {
                errors.prod_cat = "Required"
            }

            return errors
        },

        onSubmit: async (values, { resetForm }) => {
            let fetchData = await axios.post(`${config.api}/productOne`, values, {
                headers: {
                    authorization: `${localStorage.getItem("login_auth_token")}`
                }
            });
            alert(fetchData.data.message)
            resetForm({ values: '' })
            navigate('/allproducts')
        }
    })
    return (
        <div className="conatiner-fluid">
            <div className="container">
                <h1 className='mb-4'>Add New Product</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Product Image URL <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.prod_img ? 'errBorder form-control' : 'form-control'} name='prod_img' value={formik.values.prod_img} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_img ? <p style={{ color: 'red' }}>{formik.errors.prod_img}</p> : null
                            }
                            <label>Product Name <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.prod_name ? 'errBorder form-control' : 'form-control'} name='prod_name' value={formik.values.prod_name} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_name ? <p style={{ color: 'red' }}>{formik.errors.prod_name}</p> : null
                            }
                            <label>Product Rating <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_rating ? 'errBorder form-control' : 'form-control'} name='prod_rating' value={formik.values.prod_rating} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_rating ? <p style={{ color: 'red' }}>{formik.errors.prod_rating}</p> : null
                            }
                            <label>Product Color <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.prod_clr ? 'errBorder form-control' : 'form-control'} name='prod_clr' value={formik.values.prod_clr} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_clr ? <p style={{ color: 'red' }}>{formik.errors.prod_clr}</p> : null
                            }
                            <label>Product ROM <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_rom ? 'errBorder form-control' : 'form-control'} name='prod_rom' value={formik.values.prod_rom} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_rom ? <p style={{ color: 'red' }}>{formik.errors.prod_rom}</p> : null
                            }
                            <label>Product category <span className='redStar'>*</span></label>
                            <select name="prod_cat" value={formik.values.prod_cat} className={formik.errors.prod_cat ? 'errBorder form-control' : 'form-control'} onChange={formik.handleChange}>
                                <option>-- Select category --</option>
                                <option value="smartphone">SmartPhone</option>
                                <option value="tablets">Tablets</option>
                                <option value="smartwatch">Smartwatch</option>
                                <option value="cam">Cam</option>
                                <option value="laptop">Laptop</option>
                                <option value="headsets">Headset</option>
                                <option value="speaker">Speaker</option>
                                <option value="accessories">Accessories</option>
                                <option value="other">Other</option>
                            </select>
                            {
                                formik.errors.prod_cat ? <p style={{ color: 'red' }}>{formik.errors.prod_cat}</p> : null
                            }
                        </div>
                        <div className="col-lg-6">
                            <label>Product RAM <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_ram ? 'errBorder form-control' : 'form-control'} name='prod_ram' value={formik.values.prod_ram} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_ram ? <p style={{ color: 'red' }}>{formik.errors.prod_ram}</p> : null
                            }
                            <label>Product Original Price <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_price ? 'errBorder form-control' : 'form-control'} name='prod_price' value={formik.values.prod_price} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_price ? <p style={{ color: 'red' }}>{formik.errors.prod_price}</p> : null
                            }
                            <label>Product Discount Price <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_price_with_offer ? 'errBorder form-control' : 'form-control'} name='prod_price_with_offer' value={formik.values.prod_price_with_offer} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_price_with_offer ? <p style={{ color: 'red' }}>{formik.errors.prod_price_with_offer}</p> : null
                            }
                            <label>Product Buyed Count <span className='redStar'>*</span></label>
                            <input type="number" className={formik.errors.prod_cus_count ? 'errBorder form-control' : 'form-control'} name='prod_cus_count' value={formik.values.prod_cus_count} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_cus_count ? <p style={{ color: 'red' }}>{formik.errors.prod_cus_count}</p> : null
                            }
                            <label>Product Website <span className='redStar'>*</span></label>
                            <input type="text" className={formik.errors.prod_website ? 'errBorder form-control' : 'form-control'} name='prod_website' value={formik.values.prod_website} onChange={formik.handleChange} />
                            {
                                formik.errors.prod_website ? <p style={{ color: 'red' }}>{formik.errors.prod_website}</p> : null
                            }
                        </div>
                    </div>
                    <div className="add_prod_btn">
                        <button className='btn btn-warning mt-5'>ADD PRODUCT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct