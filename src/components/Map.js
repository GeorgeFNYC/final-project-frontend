import React from 'react'

import { motion } from "framer-motion"

import HeaderNav from './HeaderNav'

function Map() {
  return (
    <>
        <HeaderNav />
        <motion.div
          initial={{ y: 40, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} 
          id='mapDiv'>
            <iframe src="https://my.atlistmaps.com/map/93309f46-e5fd-40b6-9f02-21505c79985f?share=true" allow="geolocation" width="100%" height="500px" frameborder="0" scrolling="no" allowfullscreen></iframe>
        </motion.div>
    </>
  )
}

export default Map