import React from 'react'
import { Button } from 'components/ui'
import { HiPlusCircle } from 'react-icons/hi'
import ProductTableSearch from './ProductTableSearch'
//import ProductFilter from './ProductFilter'
import { Link } from 'react-router-dom'

const ProductTableTools = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
            <ProductTableSearch />
            {/*<ProductFilter />*/}
            <Link
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/product-list.csv"
                target="_blank"
                download
            >
                {/*<Button block size="sm" icon={<HiDownload />}>
                    Export
                </Button>*/}
            </Link>
            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/app/sales/product-new"
            >
                <Button block size="sm" icon={<HiPlusCircle />}>
                    Add Vehicle
                </Button>
            </Link>
        </div>
    )
}

export default ProductTableTools
