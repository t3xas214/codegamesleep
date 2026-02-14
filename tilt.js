// 3D Tilt Effect for Glass Panels
document.addEventListener('DOMContentLoaded', () => {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate rotation based on cursor position
            // Center of element is (0,0)
            const xPct = (x / rect.width) - 0.5;
            const yPct = (y / rect.height) - 0.5;

            // Max rotation degrees
            const maxRotate = 10;

            // Reverse x/y for rotation (yPct rotates X axis, xPct rotates Y axis)
            const xRotate = -yPct * maxRotate;
            const yRotate = xPct * maxRotate;

            element.style.transform = `perspective(1000px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale3d(1.02, 1.02, 1.02)`;

            // Add dynamic light effect
            const lightX = (x / rect.width) * 100;
            const lightY = (y / rect.height) * 100;

            element.style.background = `
                radial-gradient(
                    circle at ${lightX}% ${lightY}%, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(255, 255, 255, 0) 80%
                ),
                linear-gradient(135deg, rgba(26, 30, 36, 0.9), rgba(10, 14, 20, 0.95))
            `;

            element.style.borderColor = 'var(--neon-blue)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            element.style.background = 'linear-gradient(135deg, rgba(26, 30, 36, 0.9), rgba(10, 14, 20, 0.95))';
            element.style.borderColor = 'var(--hud-border)';
        });
    });
});
