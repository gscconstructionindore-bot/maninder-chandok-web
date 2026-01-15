"use client";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

const journeyData = [
    { year: "2006–07", title: "Joined Lionism", description: "Started the journey of service and leadership." },
    { year: "2007–08", title: "Club Treasurer", description: "Managed financial responsibilities and club resources." },
    { year: "2008–10", title: "Secretary (Twice)", description: "Served two terms, handling administration and correspondence." },
    { year: "2010–11", title: "Cabinet Member", description: "Stepped up to district-level leadership roles." },
    { year: "2011–12", title: "Deputy Cabinet Secretary", description: "Assisted in district administration and coordination." },
    { year: "2012–13", title: "President", description: "Led the club with vision and dedication." },
    { year: "2013–14", title: "Zone Chairperson", description: "Oversaw multiple clubs in the zone." },
    { year: "2014–15", title: "Region Chairperson", description: "Guided region-wide initiatives and club growth." },
    { year: "2015–16", title: "Train the Trainer", description: "Empowered others through leadership training." },
    { year: "2016–17", title: "DT Coordinator – GLT", description: "Global Leadership Team Coordinator for the district." },
    { year: "2017–18", title: "DT Cabinet Secretary", description: "Key administrative role in the district cabinet." },
    { year: "2018–19", title: "Micro Cabinet", description: "Served in the core leadership team." },
    { year: "2019–21", title: "DT Coordinator – GLT", description: "Returned to lead Global Leadership Team initiatives." },
    { year: "2021–22", title: "DT Coordinator – GMT", description: "Global Membership Team Coordinator." },
    { year: "2022–23", title: "DT Coordinator – GLT", description: "Continuing excellence in leadership development." },
    { year: "2023–24", title: "DT Coordinator – GMT", description: "Driving membership growth and engagement." },
    { year: "2024–25", title: "DT Coordinator – GST", description: "Global Service Team Coordinator, focusing on impact." },
];

export default function JourneyPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-24 pb-20 overflow-hidden">

            {/* Hero Header */}
            <section className="relative px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-400 dark:to-white">
                        Lions Journey
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        A timeline of dedication, leadership, and service. Two decades of impact and growth within the Lions International community.
                    </p>
                </motion.div>

                {/* Abstract Background Blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 dark:bg-red-900/10 rounded-full blur-[100px] -z-10" />
            </section>

            {/* Timeline Container */}
            <div ref={containerRef} className="relative max-w-4xl mx-auto px-4 sm:px-6">

                {/* Vertical Line */}
                <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] h-full bg-gray-200 dark:bg-gray-800 md:-translate-x-1/2 overflow-hidden rounded-full">
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#CE1117] via-[#ff4d4d] to-[#CE1117]"
                    />
                </div>

                <div className="space-y-12 md:space-y-24">
                    {journeyData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Bottom ornamental end */}
                <div className="absolute bottom-0 left-[15px] md:left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-[#CE1117] shadow-[0_0_20px_rgba(206,17,23,0.5)] z-10" />
            </div>

        </main>
    );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "0px 0px -50% 0px" });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`relative flex flex-col md:flex-row items-center md:justify-between w-full ${isEven ? "" : "md:flex-row-reverse"}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-black bg-white dark:bg-gray-900 shadow-md md:-translate-x-1/2 z-20 flex items-center justify-center">
                <motion.div
                    ref={ref}
                    animate={{ backgroundColor: isInView ? "#CE1117" : "#e5e7eb" }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 rounded-full"
                />
            </div>

            {/* Content Card */}
            <div className={`pl-12 md:pl-0 w-full md:w-[45%] ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {item.year}
                </h3>
                <h4 className="text-xl font-semibold text-[#CE1117] mb-2">
                    {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                    {item.description}
                </p>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden md:block w-[45%]" />

        </motion.div>
    );
}
