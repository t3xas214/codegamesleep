import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getTimeUntilNextArmsRace, formatCountdown } from '../utils/timeUtils';

const ArmsRaceTimer = () => {
    const [timeRemaining, setTimeRemaining] = useState(getTimeUntilNextArmsRace());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(getTimeUntilNextArmsRace());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { hours, minutes, seconds } = timeRemaining;

    return (
        <section className="mb-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-center"
                style={{ color: 'var(--hud-white)' }}
            >
                Alliance Tools
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gunmetal border-2 rounded-lg p-8 text-center"
                style={{ borderColor: 'var(--danger-red)' }}
            >
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--hud-white)' }}>
                    ⚡ Current Arms Race
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--muted-grey)' }}>
                    Time until next 4-hour block
                </p>

                {/* Countdown Display */}
                <div
                    className="text-5xl sm:text-6xl md:text-7xl font-mono font-bold mb-4 text-glow-red"
                    style={{ color: 'var(--danger-red)' }}
                >
                    {formatCountdown(hours, minutes, seconds)}
                </div>

                {/* Info Text */}
                <p className="text-sm" style={{ color: 'var(--muted-grey)' }}>
                    Arms Race blocks: 00:00, 04:00, 08:00, 12:00, 16:00, 20:00 UTC
                </p>

                {/* Visual Indicator */}
                <motion.div
                    animate={{
                        boxShadow: [
                            '0 0 10px rgba(255, 0, 0, 0.5)',
                            '0 0 20px rgba(255, 0, 0, 0.8)',
                            '0 0 10px rgba(255, 0, 0, 0.5)',
                        ],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="mt-6 mx-auto w-20 h-20 rounded-full flex items-center justify-center text-4xl"
                    style={{ backgroundColor: 'var(--danger-red)' }}
                >
                    ⚔️
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ArmsRaceTimer;
