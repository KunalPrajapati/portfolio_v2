import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div style={{ position: "absolute", width: "100%", height: "100%"}}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "#0d47a1",
                    //     },
                    // },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 6,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.6,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1100,
                            },
                            value: 70,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: ["circle", "square", "triangle", "pentagon"],
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticleBg;
