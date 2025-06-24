import Head from "next/head";
import { useEffect, useState, useMemo } from "react";
import { BenefitList } from "@/components/benefits/BenefitList";
import RewardProgress from "@/components/rewards/RewardProgress";
import { SkeletonLoader } from "@/components/ui/SkeletonLoader";
import Layout from "@/components/layout/Layout";
import { fakeFetch } from "@/lib/fakeFetch";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    fakeFetch(
      {
        user: {
          id: "user-001",
          name: "Ahmed Gamal",
          email: "theahmedgamall@gmail.com",
          avatar: "/images/svg/avatar.svg",
          level: 12,
          xp: 3280,
          nextLevelXP: 4000,
          membership: "Platinum",
          joinedAt: "24-06-2020",
        },
        benefits: [
          {
            id: "bf-001",
            title: "10% Cashback",
            icon: "💰",
            description: "Cashback on all online purchases above $50.",
            type: "cashback",
            claimed: false,
            expiresAt: "2025-08-01T23:59:59Z",
            cta: "Claim",
            isNew: true,
          },
          {
            id: "bf-002",
            title: "Flight Voucher",
            icon: "✈️",
            description: "Get up to $100 off international flights.",
            type: "voucher",
            claimed: true,
            claimedAt: "2025-06-12T10:30:00Z",
            cta: "View",
            isNew: false,
          },
          {
            id: "bf-003",
            title: "Premium Lounge Access",
            icon: "🛋️",
            description: "Complimentary access to airport lounges worldwide.",
            type: "access",
            claimed: false,
            expiresAt: "2025-12-31T23:59:59Z",
            cta: "Claim",
            isNew: true,
          },
          {
            id: "bf-004",
            title: "Bonus Reward Points",
            icon: "🎯",
            description: "Earn 2x points on dining and travel.",
            type: "bonus",
            claimed: true,
            claimedAt: "2025-06-10T18:00:00Z",
            cta: "View",
            isNew: false,
          },
          {
            id: "bf-005",
            title: "Priority Customer Support",
            icon: "📞",
            description: "Dedicated hotline for platinum members.",
            type: "service",
            claimed: false,
            cta: "Activate",
            isNew: false,
          },
          {
            id: "bf-006",
            title: "Annual Gift Box",
            icon: "🎁",
            description: "Exclusive curated gift sent to your doorstep.",
            type: "gift",
            claimed: true,
            claimedAt: "2025-05-01T09:00:00Z",
            cta: "Track",
            isNew: false,
          },
          {
            id: "bf-007",
            title: "Free Coffee for a Month",
            icon: "☕",
            description: "Enjoy free coffee from partner cafes for 30 days.",
            type: "perk",
            claimed: false,
            expiresAt: "2025-07-15T23:59:59Z",
            cta: "Claim",
            isNew: true,
          },
          {
            id: "bf-008",
            title: "Early Access to Sales",
            icon: "🛍️",
            description: "Shop exclusive deals before public release.",
            type: "access",
            claimed: true,
            claimedAt: "2025-06-20T12:00:00Z",
            cta: "View",
            isNew: false,
          },
          {
            id: "bf-009",
            title: "Birthday Reward",
            icon: "🎂",
            description: "Special surprise for your birthday month.",
            type: "gift",
            claimed: false,
            expiresAt: "2025-07-01T00:00:00Z",
            cta: "Open",
            isNew: true,
          },
          {
            id: "bf-010",
            title: "Fitness Club Discount",
            icon: "🏋️‍♂️",
            description: "50% off on premium gym memberships.",
            type: "discount",
            claimed: false,
            expiresAt: "2025-09-10T23:59:59Z",
            cta: "Join Now",
            isNew: false,
          },
          {
            id: "bf-011",
            title: "Digital Magazine Subscription",
            icon: "📚",
            description: "Free 6-month subscription to premium magazines.",
            type: "subscription",
            claimed: true,
            claimedAt: "2025-06-05T14:00:00Z",
            cta: "Read Now",
            isNew: false,
          },
          {
            id: "bf-012",
            title: "NFT Airdrop",
            icon: "🖼️",
            description: "Get a limited edition NFT just for members.",
            type: "collectible",
            claimed: false,
            cta: "Mint Now",
            isNew: true,
          },
          {
            id: "bf-013",
            title: "Free Movie Ticket",
            icon: "🎬",
            description: "One free cinema ticket every month.",
            type: "entertainment",
            claimed: false,
            expiresAt: "2025-06-30T23:59:59Z",
            cta: "Book",
            isNew: true,
          },
          {
            id: "bf-014",
            title: "Cloud Storage Upgrade",
            icon: "☁️",
            description: "1TB additional cloud storage for 1 year.",
            type: "storage",
            claimed: true,
            claimedAt: "2025-06-01T08:30:00Z",
            cta: "Manage",
            isNew: false,
          },
          {
            id: "bf-015",
            title: "VIP Event Invite",
            icon: "🎟️",
            description: "Join exclusive invite-only community events.",
            type: "invite",
            claimed: false,
            expiresAt: "2025-10-01T23:59:59Z",
            cta: "RSVP",
            isNew: true,
          },
          {
            id: "bf-016",
            title: "Free E-Book Bundle",
            icon: "📖",
            description: "Access a bundle of 10 premium e-books.",
            type: "education",
            claimed: false,
            cta: "Download",
            isNew: true,
          },
          {
            id: "bf-017",
            title: "Language Learning App Pro",
            icon: "🧠",
            description: "3 months of free premium language learning.",
            type: "learning",
            claimed: false,
            cta: "Activate",
            isNew: true,
          },
          {
            id: "bf-018",
            title: "Eco-friendly Swag Kit",
            icon: "🌱",
            description: "Receive a kit of sustainable branded merch.",
            type: "merch",
            claimed: false,
            cta: "Redeem",
            isNew: false,
          },
          {
            id: "bf-019",
            title: "Uber Ride Credit",
            icon: "🚗",
            description: "$20 credit for your next Uber ride.",
            type: "transport",
            claimed: true,
            claimedAt: "2025-06-18T16:20:00Z",
            cta: "Use Now",
            isNew: false,
          },
          {
            id: "bf-020",
            title: "Crypto Wallet Credit",
            icon: "🪙",
            description: "Earn $10 in crypto on signup.",
            type: "crypto",
            claimed: false,
            cta: "Claim Now",
            isNew: true,
          },
          {
            id: "bf-021",
            title: "Wellness Retreat Raffle",
            icon: "🏞️",
            description: "Enter to win a luxury retreat getaway.",
            type: "raffle",
            claimed: false,
            expiresAt: "2025-07-31T23:59:59Z",
            cta: "Enter Now",
            isNew: true,
          },
          {
            id: "bf-022",
            title: "Spotify Premium 3 Months",
            icon: "🎧",
            description: "Free 3-month subscription to Spotify Premium.",
            type: "music",
            claimed: false,
            cta: "Activate",
            isNew: true,
          },
          {
            id: "bf-023",
            title: "Monthly Snack Box",
            icon: "🍿",
            description: "A curated snack box delivered monthly.",
            type: "subscription",
            claimed: false,
            cta: "Subscribe",
            isNew: false,
          },
          {
            id: "bf-024",
            title: "Crypto Course Access",
            icon: "💹",
            description: "Free access to beginner crypto trading course.",
            type: "education",
            claimed: false,
            cta: "Start Learning",
            isNew: true,
          },
          {
            id: "bf-025",
            title: "LinkedIn Premium Trial",
            icon: "💼",
            description: "1-month free LinkedIn Premium access.",
            type: "career",
            claimed: true,
            claimedAt: "2025-06-15T12:00:00Z",
            cta: "Explore",
            isNew: false,
          },
        ],
      },
      1500
    ).then((data) => {
      setUser(data.user);
      setBenefits(data.benefits);
      setLoading(false);
    });
  }, []);

  const benefitStatusData = useMemo(() => {
    const claimedCount = benefits.filter((b) => b.claimed).length;
    const unclaimedCount = benefits.filter((b) => !b.claimed).length;

    return {
      labels: ["Claimed", "Unclaimed"],
      datasets: [
        {
          label: "Benefits",
          data: [claimedCount, unclaimedCount],
          backgroundColor: ["#007CF0", "#FFA500"],
          borderWidth: 0,
          borderRadius: 8,
          barThickness: 20,
          borderSkipped: false,
        },
      ],
    };
  }, [benefits]);

  return (
    <>
      <Head>
        <title>CRED Dashboard</title>
        <meta name="description" content="CRED Garage Rewards Dashboard" />
      </Head>

      <Layout user={user} withSidebar layoutType="full">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <div className="space-y-12">
            {/* Section: Reward Progress */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">
                🎯 Your Reward Progress
              </h2>
              <RewardProgress user={user} chartData={benefitStatusData} />
            </section>

            {/* Section: Available Benefits */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">
                🏆 Available Benefits
              </h2>
              <BenefitList
                benefits={benefits}
                onClaim={(id) => {
                  setBenefits((prev) =>
                    prev.map((b) =>
                      b.id === id
                        ? {
                            ...b,
                            claimed: true,
                            claimedAt: new Date().toISOString(),
                          }
                        : b
                    )
                  );
                }}
              />
            </section>
          </div>
        )}
      </Layout>
    </>
  );
}
