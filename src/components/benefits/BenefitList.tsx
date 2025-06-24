import { BenefitCard } from "./BenefitCard";
import { motion } from 'framer-motion';
import { useState } from "react";
import CongratulationModal from "./CongratulationModal";

export const BenefitList = ({ benefits }) => {
    const [claimedBenefit, setClaimedBenefit] = useState(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
        })
    };

    const handleClaim = (benefit) => {
        setClaimedBenefit(benefit);
    };

    const closeModal = () => {
        setClaimedBenefit(null);
    };

    return (
        <>
            <motion.section
                className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
            >
                {benefits.map((benefit, idx) => (
                    <motion.div
                        key={idx}
                        custom={idx}
                        variants={cardVariants}
                    >
                        <BenefitCard
                            benefit={benefit}
                            onClaim={() => handleClaim(benefit)}
                        />
                    </motion.div>
                ))}
            </motion.section>

            {claimedBenefit && (
                <CongratulationModal
                    benefit={claimedBenefit}
                    onClose={closeModal}
                />
            )}
        </>
    );
};
