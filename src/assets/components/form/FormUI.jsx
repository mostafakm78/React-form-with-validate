import React from 'react'
import { Formik, Form , Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import './../../../../src/index.css'

const FormUI = () => {

    // const formik = useFormik({
    //     initialValues : {
    //         email : '',
    //         name : '',
    //         username : '',
    //         password : ''
    //     },
    //     validate : (values) => {
    //         let errors = {}

    //         if (values.name === "") {
    //             errors.name = "enter your name"
    //         } else if (values.name.length < 5) {
    //             errors.name = "enter your full name"
    //         }

    //         if (values.email === "") {
    //             errors.email = "enter your email"
    //         } else if (! /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(values.email)) {
    //             errors.email = "enter correct email !"
    //         }

    //         if (values.username === "") {
    //             errors.username = "enter your username"
    //         }

    //         if (values.password === "") {
    //             errors.password = "enter your password"
    //         }

    //         return errors
    //     },
    //     onSubmit : (values) => {
    //         console.log(values)
    //     }
    // })

    let registerFormSchema = yup.object().shape({
        email : yup.string().required().email(),
        name : yup.string().required().min(4),
        username : yup.string().required().min(4).matches(/[A-Za-z]/ig),
        password : yup.string().required().min(6),
        role : yup.boolean().required()
    })

    // const validateHandler = (values) => {
    //     let errors = {}

    //         if (values.name === "") {
    //             errors.name = "enter your name"
    //         } else if (values.name.length < 5) {
    //             errors.name = "enter your full name"
    //         }

    //         if (values.email === "") {
    //             errors.email = "enter your email"
    //         } else if (! /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(values.email)) {
    //             errors.email = "enter correct email !"
    //         }

    //         if (values.username === "") {
    //             errors.username = "enter your username"
    //         }

    //         if (values.password === "") {
    //             errors.password = "enter your password"
    //         }

    //         return errors
    // }

    const onSubmitHandler = (values) => {
        console.log(values)
    }

    return (
    <div className='flex flex-col justify-center items-center mt-20 w-full font-vazir font-bold'>
        <Formik initialValues={{
        email : '',
        name : '',
        username : '',
        password : '',
        role : false
    }}
    validationSchema={registerFormSchema}
    onSubmit={onSubmitHandler}
    >

           <Form className='flex items-center flex-col max-w-lg lg:w-full w-2/3 bg-gray-100 lg:p-10 rounded-xl ring-1 ring-blue-600 p-5'>


                <div className='py-3 w-full flex flex-col items-center justify-center text-red-600'>
                <label className='text-xl text-blue-600'>نام کامل</label>
                <Field className="border text-black px-4 py-2 w-full border-black rounded" name="name" type="text" />
                <ErrorMessage className='text-red-600' name='name'/>
                {/* <input placeholder='Name' name='name' {...formik.getFieldProps('name')}/> */}
                </div>
                {/* {formik.touched.name && formik.errors.name ? <span>{formik.errors.name}</span> : null} */}
                <div className='py-3 flex w-full flex-col items-center justify-center text-red-600'>
                <label className='text-xl text-blue-600'>نام کاربری</label>
                <Field className="border text-black px-4 py-2 w-full border-black rounded" name="username" type="text" />
                <ErrorMessage name='username'/>
                {/* <input placeholder='UserName' name='username' {...formik.getFieldProps('username')}/> */}
                </div>
                {/* {formik.touched.username && formik.errors.username ? <span>{formik.errors.username}</span> : null} */}
                <div className='py-3 w-full flex flex-col items-center justify-center text-red-600'>
                <label className='text-xl text-blue-600'>ایمیل</label>
                <Field className="border text-black px-4 py-2 w-full border-black rounded" name="email" type="email" />
                <ErrorMessage name='email'/>
                {/* <input placeholder='email' name='email' {...formik.getFieldProps('email')}/> */}
                </div>
                {/* {formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span> : null} */}
                <div className='py-3 flex w-full flex-col items-center justify-center text-red-600'>
                <label className='text-xl text-blue-600'>رمز عبور</label>
                <Field className="border text-black px-4 py-2 w-full border-black rounded" name="password" type="password" />
                <ErrorMessage name='password'/>
                {/* <input placeholder='password' name='password' {...formik.getFieldProps('password')}/> */}
                </div >
                <div className='py-3 flex w-full items-center justify-center text-red-600'>
                <label className='text-xl text-blue-600'>قوانین را می پذیرم
                <Field className="mr-4 size-4" name="role" type="checkbox" />
                </label>
                <ErrorMessage name='role'/>
                </div >
                {/* {formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span> : null} */}
                <button className='bg-blue-600 w-1/2 text-white hover:bg-blue-900 duration-500 rounded border-none p-2' type='submit'>ثبت نام</button>


           </Form>

    </Formik>
    </div>
  )
}

export default FormUI
