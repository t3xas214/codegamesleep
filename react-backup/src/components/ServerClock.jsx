import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCurrentUTCTime, formatUTCTime } from '../utils/timeUtils';

const ServerClock = () => {
    const [currentTime, setCurrentTime] = useState(formatUTCTime(getCurrentUTCTime()));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(formatUTCTime(getCurrentUTCTime()));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gunmetal border-2 rounded-lg p-6 mb-8 text-center"
            style={{ borderColor: 'var(--neon-blue)' }}
        >
            <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--hud-white)' }}>
                Server Time (UTC)
            </h2>
            <div
                className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-glow-blue"
                style={{ color: 'var(--neon-blue)' }}
            >
                {currentTime}
            </div>
            <p className="text-sm mt-2" style={{ color: 'var(--muted-grey)' }}>
                Game Time
            </p>
        </motion.div>
    );
};

export default ServerClock;
