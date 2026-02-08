import React from 'react';
import { motion } from 'framer-motion';

const leadershipData = [
    {
        role: 'Leader',
        rank: 'R5',
        name: 'Commander Alpha',
        about: 'Strategic mastermind leading the alliance to victory. Specializes in coordinated attacks and resource management.',
        avatar: '👑',
    },
    {
        role: 'Warlord',
        rank: 'R4',
        name: 'Battle Chief',
        about: 'Leads all military operations and coordinates VS Duel strategies. Expert in tactical warfare.',
        avatar: '⚔️',
    },
    {
        role: 'Muse',
        rank: 'R4',
        name: 'Diplomat Prime',
        about: 'Handles alliance diplomacy and recruitment. Maintains positive relations with allied factions.',
        avatar: '🎭',
    },
    {
        role: 'Recruiter',
        rank: 'R4',
        name: 'Scout Master',
        about: 'Actively recruits new members and ensures alliance growth. Welcomes and trains new commanders.',
        avatar: '🎯',
    },
];

const LeadershipCard = ({ leader, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: 'var(--neon-blue)' }}
            className="bg-gunmetal border-2 border-steel-edge rounded-lg p-6 transition-all duration-300"
        >
            {/* Avatar */}
            <div className="flex justify-center mb-4">
                <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-5xl border-4"
                    style={{
                        backgroundColor: 'var(--steel-edge)',
                        borderColor: 'var(--gold)',
                    }}
                >
                    {leader.avatar}
                </div>
            </div>

            {/* Role and Rank */}
            <div className="text-center mb-3">
                <h3 className="text-2xl font-bold" style={{ color: 'var(--neon-blue)' }}>
                    {leader.role}
                </h3>
                <span
                    className="inline-block px-3 py-1 rounded-full text-sm font-bold mt-2"
                    style={{
                        backgroundColor: 'var(--danger-red)',
                        color: 'white',
                    }}
                >
                    {leader.rank}
                </span>
            </div>

            {/* Name */}
            <p className="text-center text-lg font-semibold mb-3" style={{ color: 'var(--gold)' }}>
                {leader.name}
            </p>

            {/* About */}
            <p className="text-sm text-center leading-relaxed" style={{ color: 'var(--muted-grey)' }}>
                {leader.about}
            </p>
        </motion.div>
    );
};

const LeadershipBoard = () => {
    return (
        <section className="mb-12">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-6 text-center"
                style={{ color: 'var(--hud-white)' }}
            >
                Command Staff
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadershipData.map((leader, index) => (
                    <LeadershipCard key={index} leader={leader} index={index} />
                ))}
            </div>
        </section>
    );
};

export default LeadershipBoard;
