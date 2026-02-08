import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ allianceName = "PHOENIX RISING", serverNumber = "1337" }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-lg mb-8"
            style={{
                background: 'linear-gradient(135deg, #0f1215 0%, #1a1e24 50%, #2c333a 100%)',
                minHeight: '400px',
            }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] px-4 py-12">
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4 text-glow-blue"
                    style={{ color: 'var(--neon-blue)' }}
                >
                    {allianceName}
                </motion.h1>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center"
                    style={{ color: 'var(--gold)' }}
                >
                    Server #{serverNumber}
                </motion.div>

                {/* Decorative border */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '200px' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="h-1 mt-6 rounded"
                    style={{ backgroundColor: 'var(--neon-blue)' }}
                ></motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
