import React from 'react'
import { BreadCrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeperator } from '../components/ui/bread-crumb'
import {Link} from 'react-router-dom'
import {FaHouse} from 'react-icons/fa6'

const CustomBreadCrumb = () => {
  return (
    <div className='w-full mt-12 flex items-center justify-center flex-col gap-12'>
        <h2 className='text-3xl font-semibold text-gray-700 tracking-wider'>
          Custom BreadCrumb  
        </h2>

        <BreadCrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={"/"} className='flex items-center justify-center gap-2'><FaHouse />Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

          <BreadcrumbSeperator />  

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={"/components"} >Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbSeperator />
              <BreadcrumbEllipsis />
              <BreadcrumbSeperator />
            </BreadcrumbItem>  

            <BreadcrumbItem>
            <BreadcrumbPage>Phones</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </BreadCrumb>
        </div>
  )
}

export default CustomBreadCrumb