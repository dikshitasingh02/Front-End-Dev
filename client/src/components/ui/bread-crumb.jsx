import React from "react"
import { FaChevronRight } from "react-icons/fa6"
import {BsThreeDots}  from "react-icons/bs"
import { cn } from "../../utils/utils";

// Container

const BreadCrumb = React.forwardRef((props, ref) => (
    <nav ref={ref} {...props} aria-label='breadcrumb' />
));

BreadCrumb.displayName = "Breadcrumb";

// List

const BreadcrumbList = React.forwardRef(({className, ...props}, ref) => (
    <ol ref={ref} className={cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-gray-500 sm:gap-2.5", className)}
    {...props}
    />
))

BreadcrumbList.displayName = "BreadcrumbList";

// Item 

const BreadcrumbItem = React.forwardRef(({className, ...props}, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)}
    {...props}
    />
))

BreadcrumbItem.displayName = "BreadcrumbItem";

// Link

const BreadcrumbLink = React.forwardRef(({className, ...props}, ref) => (
    <a  ref={ref} className={cn("transition-colors hover:text-gray-600", className)}
    {...props}
    />
))

BreadcrumbLink.displayName = "BreadcrumbLink";

// Current Page

const BreadcrumbPage = React.forwardRef(({className, ...props}, ref) => (
    <span ref={ref} role='link' aria-disabled='true' aria-current='page' className={cn("font-normal text-gray-600", className)}
    {...props}
    />
))

BreadcrumbPage.displayName = "BreadcrumbPage";

// seperator

const BreadcrumbSeperator = React.forwardRef(({className, children, ...props}, ref) => (
    <li role='presentation' aria-hidden='true' ref={ref} className={cn("[&>svg]:size-3.5", className)}
    {...props}
    >
        {children ?? <FaChevronRight/>}
    </li>
))

BreadcrumbSeperator.displayName = "BreadcrumbSeperator";

// ellipsis

const BreadcrumbEllipsis = React.forwardRef(({className, ...props}, ref) => (
    <span role='presentation' aria-hidden='true' ref={ref} className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
    >
        <BsThreeDots className="w-4 h-4" />
        <span className="sr-only">More</span>
    </span>
))

BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// Export all
export {
    BreadCrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeperator,
    BreadcrumbEllipsis,
}
