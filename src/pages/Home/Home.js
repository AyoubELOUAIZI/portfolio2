import { NavBar } from '../../components/Navbar/Navbar'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero';
import { Comments } from './Comments';
import { useEffect, useState } from 'react';
import { TutorialVideos } from './TutorialVideos';

export const Home = () => {
    const [account, setAccount] = useState(null);
    useEffect(() => {
        console.log('account has changed to :')
        console.log(account);
    }, [account])
    return (
        <>
            <NavBar setAccount={setAccount} account={account} isHome={true} />
            <Hero />
            <Comments account={account} setAccount={setAccount} />
            <TutorialVideos/>
            <Footer />
        </>
    )
}
