import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCurrentDayOfWeek } from '../utils/timeUtils';

const scheduleData = [
    {
        day: 'Monday',
        dayNum: 0,
        event: 'Radar & Base Expansion',
        icon: '📡',
        f2pTips: [
            'Save all expansion chests from daily rewards',
            'Use free speedups strategically',
            'Focus on radar upgrades first for better scouting',
            'Complete alliance tasks for bonus resources',
        ],
        spenderTips: [
            'Best pack: Expansion Bundle (70% off)',
            'Consider VIP boost for instant builds',
            'Resource packs provide best value today',
            'Stack construction speedups from store',
        ],
    },
    {
        day: 'Tuesday',
        dayNum: 1,
        event: 'Building Day',
        icon: '🏗️',
        f2pTips: [
            'Hoard all building speedups until today',
            'Upgrade resource buildings first',
            'Join alliance building events',
            'Use free builder boosts wisely',
        ],
        spenderTips: [
            'Best pack: Builder\'s Bundle',
            'VIP 8+ gets second builder queue',
            'Speedup packs are 50% off',
            'Consider monthly card for daily speedups',
        ],
    },
    {
        day: 'Wednesday',
        dayNum: 2,
        event: 'Tech & Research',
        icon: '🔬',
        f2pTips: [
            'Save research speedups all week',
            'Focus on military tech tree',
            'Complete research tasks for alliance points',
            'Use alliance help to reduce time',
        ],
        spenderTips: [
            'Best pack: Research Accelerator',
            'Tech speedups give best value today',
            'Consider permanent research boost',
            'VIP bonuses stack with research events',
        ],
    },
    {
        day: 'Thursday',
        dayNum: 3,
        event: 'Hero Day',
        icon: '🦸',
        f2pTips: [
            'Save all hero XP items',
            'Focus on one hero at a time',
            'Complete hero missions for fragments',
            'Use alliance shop for hero shards',
        ],
        spenderTips: [
            'Best pack: Hero Chest Bundle',
            'Legendary hero fragments on sale',
            'XP boosters are 60% off',
            'Consider hero skin packs for bonuses',
        ],
    },
    {
        day: 'Friday',
        dayNum: 4,
        event: 'Total Mobilization (Training)',
        icon: '🎖️',
        f2pTips: [
            'Hoard all training speedups',
            'Train highest tier troops you can',
            'Use alliance training boosts',
            'Complete training tasks for rewards',
        ],
        spenderTips: [
            'Best pack: Mobilization Bundle',
            'Training speedups are 70% off',
            'Resource packs help sustain training',
            'VIP training boost stacks with events',
        ],
    },
    {
        day: 'Saturday',
        dayNum: 5,
        event: 'Enemy Buster (Kill Event)',
        icon: '💀',
        f2pTips: [
            'Save stamina all week for today',
            'Target lower level enemies for efficiency',
            'Join rallies for better rewards',
            'Use free marches strategically',
        ],
        spenderTips: [
            'Best pack: War Chest (best value of week)',
            'Stamina packs are essential',
            'March slots unlock at VIP 6',
            'Attack boost items are 50% off',
        ],
    },
];

const VSDuelSchedule = () => {
    const [activeDay, setActiveDay] = useState(getCurrentDayOfWeek());
    const [showTips, setShowTips] = useState(false);

    useEffect(() => {
        // Update active day based on UTC time
        const interval = setInterval(() => {
            setActiveDay(getCurrentDayOfWeek());
        }, 60000); // Check every minute

        return () => clearInterval(interval);
    }, []);

    const currentSchedule = scheduleData[activeDay];

    return (
        <section className="mb-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-center"
                style={{ color: 'var(--hud-white)' }}
            >
                VS Duel Schedule
            </motion.h2>

            {/* Day Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                {scheduleData.map((schedule) => (
                    <motion.button
                        key={schedule.dayNum}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setActiveDay(schedule.dayNum);
                            setShowTips(false);
                        }}
                        className={`px-4 py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 min-w-[100px] ${activeDay === schedule.dayNum
                                ? 'border-2 text-glow-blue'
                                : 'border border-steel-edge'
                            }`}
                        style={{
                            backgroundColor: activeDay === schedule.dayNum ? 'var(--gunmetal)' : 'var(--steel-edge)',
                            borderColor: activeDay === schedule.dayNum ? 'var(--neon-blue)' : 'var(--steel-edge)',
                            color: activeDay === schedule.dayNum ? 'var(--neon-blue)' : 'var(--muted-grey)',
                        }}
                    >
                        {schedule.day.substring(0, 3)}
                    </motion.button>
                ))}
            </div>

            {/* Day Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDay}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gunmetal border-2 rounded-lg p-6"
                    style={{ borderColor: 'var(--neon-blue)' }}
                >
                    {/* Event Header */}
                    <div className="text-center mb-6">
                        <div className="text-6xl mb-3">{currentSchedule.icon}</div>
                        <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--neon-blue)' }}>
                            {currentSchedule.day}
                        </h3>
                        <p className="text-xl sm:text-2xl mt-2" style={{ color: 'var(--gold)' }}>
                            {currentSchedule.event}
                        </p>
                    </div>

                    {/* Tips Toggle Button */}
                    <div className="flex justify-center mb-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowTips(!showTips)}
                            className="px-6 py-3 rounded-lg font-bold text-lg border-2 transition-all duration-300"
                            style={{
                                backgroundColor: showTips ? 'var(--neon-blue)' : 'transparent',
                                borderColor: 'var(--neon-blue)',
                                color: showTips ? 'var(--dark-grey)' : 'var(--neon-blue)',
                            }}
                        >
                            {showTips ? '▼ Hide Tips' : '▶ Show Tips'}
                        </motion.button>
                    </div>

                    {/* Tips Content */}
                    <AnimatePresence>
                        {showTips && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                            >
                                {/* F2P Guide */}
                                <div
                                    className="border-2 rounded-lg p-5"
                                    style={{ borderColor: 'var(--neon-blue)', backgroundColor: 'rgba(0, 240, 255, 0.05)' }}
                                >
                                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--neon-blue)' }}>
                                        <span>💎</span> Free-to-Play Guide
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentSchedule.f2pTips.map((tip, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--hud-white)' }}>
                                                <span style={{ color: 'var(--neon-blue)' }}>•</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Spender Guide */}
                                <div
                                    className="border-2 rounded-lg p-5"
                                    style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(255, 215, 0, 0.05)' }}
                                >
                                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--gold)' }}>
                                        <span>💰</span> Spender Guide
                                    </h4>
                                    <ul className="space-y-2">
                                        {currentSchedule.spenderTips.map((tip, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm" style={{ color: 'var(--hud-white)' }}>
                                                <span style={{ color: 'var(--gold)' }}>•</span>
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default VSDuelSchedule;
