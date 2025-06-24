import Head from 'next/head'
import { useEffect, useState } from 'react'
import { BenefitList } from '@/components/benefits/BenefitList'
import RewardProgress from '@/components/rewards/RewardProgress'
import { SkeletonLoader } from '@/components/ui/SkeletonLoader'
import Layout from '@/components/layout/Layout'
import { fakeFetch } from '@/lib/fakeFetch'

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [benefits, setBenefits] = useState([])

    useEffect(() => {
        fakeFetch(
            {
                user: {
                    name: 'Ahmed Gamal',
                    level: 7,
                    xp: 780,
                    avatar: '/images/svg/avatar.svg',
                },
                benefits: [
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                    { title: '10% off', icon: '🔥', description: 'Save on everything', cta: 'Claim' },
                    { title: 'Free Voucher', icon: '🎟️', description: 'Get one monthly', cta: 'View' },
                    { title: 'VIP Access', icon: '🎖️', description: 'Early access', cta: 'Claim' },
                    { title: 'Free Shipping', icon: '🚚', description: 'Free express delivery', cta: 'Claim' },
                ],
            },
            1500
        ).then((data) => {
            setUser(data.user)
            setBenefits(data.benefits)
            setLoading(false)
        })
    }, [])

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
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div className="xl:col-span-1">
                            <RewardProgress user={user} />
                        </div>
                        <div className="xl:col-span-2">
                            <BenefitList benefits={benefits} />
                        </div>
                    </div>
                )}
            </Layout>
        </>
    )
}
