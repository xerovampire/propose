import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PageState } from '../App';

interface FloatingHeartsProps {
    page: PageState;
}

interface Heart {
    id: number;
    x: number;
    delay: number;
    duration: number;
    size: number;
    variant: number;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ page }) => {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        // Generate hearts only once on mount
        const newHearts = Array.from({ length: 25 }).map((_, i) => {
            const duration = 10 + Math.random() * 20; // 10-30s duration
            return {
                id: i,
                x: Math.random() * 100, // Random horizontal position
                // "Warm start": simulate hearts having started recently (up to 50% of their journey).
                // This prevents empty screen on load ("too late") 
                // but avoids hearts instantly disappearing at the top ("too early").
                delay: -Math.random() * (duration * 0.5), 
                duration: duration,
                size: 15 + Math.random() * 35,
                variant: Math.floor(Math.random() * 4)
            };
        });
        setHearts(newHearts);
    }, []);

    const getColor = (currentPage: PageState, variant: number) => {
        const proposalColors = ['text-blue-200', 'text-pink-200', 'text-red-300', 'text-white'];
        const defaultColors = ['text-pink-200', 'text-red-200', 'text-pink-300', 'text-white'];
        
        const palette = currentPage === 'proposal' ? proposalColors : defaultColors;
        return palette[variant % palette.length];
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0, rotate: 0 }}
                    animate={{ 
                        y: '-10vh', 
                        opacity: [0, 0.8, 0], // Fade in/out
                        rotate: 360
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className={`absolute transition-colors duration-1000 ${getColor(page, heart.variant)}`}
                    style={{ fontSize: `${heart.size}px` }}
                >
                    ❤
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingHearts;
