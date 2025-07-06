import React from 'react'
import FormValidationsUsingWebHook from '../components/FormValidationsUsingWebHook'
import FormValidationsUsingFormik from '../components/FormValidationsUsingFormik'

const CustomFormValidations = () => {
  return (
    <div className='w-full mt-12 flex items-center justify-center flex-col gap-12 pb-24'>
        <h2 className='text-3xl font-semibold text-gray-700 tracking-wider'>
          Custom Form Validations  
        </h2>
        
        {/*  form validations using react-webhook-form */ }
        <FormValidationsUsingWebHook />
        
        {/*  form validations using formik & yup  */}
        <FormValidationsUsingFormik />
        </div> 
  )
}

export default CustomFormValidations