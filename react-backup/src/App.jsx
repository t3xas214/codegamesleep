import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ServerClock from './components/ServerClock';
import LeadershipBoard from './components/LeadershipBoard';
import VSDuelSchedule from './components/VSDuelSchedule';
import ArmsRaceTimer from './components/ArmsRaceTimer';

function App() {
    return (
        <Layout>
            {/* Hero Section */}
            <Hero allianceName="PHOENIX RISING" serverNumber="1337" />

            {/* Server Clock */}
            <ServerClock />

            {/* Leadership Board */}
            <LeadershipBoard />

            {/* VS Duel Schedule */}
            <VSDuelSchedule />

            {/* Arms Race Timer */}
            <ArmsRaceTimer />

            {/* Footer */}
            <footer className="mt-12 py-6 text-center border-t-2" style={{ borderColor: 'var(--steel-edge)' }}>
                <p style={{ color: 'var(--muted-grey)' }}>
                    Last War: Survival Alliance Hub • Built for Victory
                </p>
            </footer>
        </Layout>
    );
}

export default App;
