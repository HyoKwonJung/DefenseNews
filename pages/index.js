import GlobalStyles from '../styles/GlobalStyles';
import Card from '../components/Card';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

const HeroSection = styled.div`
    background-image: url('https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5002%2F2019%2F10%2F01%2F0001329475_001_20191001111010538.jpg&type=sc960_832');
    background-size: cover; 
    background-position: center; 
    height: 70vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroTitle = styled.h1`
    color: white; /* Adjust color as needed */
    font-size: 10rem; 
    text-align: center; /* Center the title */
    /* Add any additional styles you need */
`;

const HeroSubtitle = styled.h2`
    color: white; /* Adjust color as needed */
    font-size: 1.5rem; /* Adjust size as needed */
    text-align: center; /* Center the subtitle */
    /* Add any additional styles you need */
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Home = () => {
    const newsArticles = [
        {
            title: 'Exploring the Intricacies of Markets, Money, and Global Economies',
            description: 'A deep dive into the complexities of modern economies.',
            imageUrl: 'https://via.placeholder.com/300',
            date: 'Jul 2',
        },
        {
            title: 'Economic Landscapes, Insights and Innovations',
            description: 'Understanding the latest trends in economic landscapes.',
            imageUrl: 'https://via.placeholder.com/300',
            date: 'May 17',
        },
        {
            title: 'Fiscal Policies and Market Movements',
            description: 'Analyzing the impact of fiscal policies on market dynamics.',
            imageUrl: 'https://via.placeholder.com/300',
            date: 'May 10',
        },
        // Add more articles as needed
    ];

    return (
        <Container>
            <GlobalStyles />
            <HeroSection>
                <HeroTitle>DEFENSE NEWSROOM</HeroTitle>
                <HeroSubtitle>Defense</HeroSubtitle>
            </HeroSection>
            <CardGrid>
                {newsArticles.map((article, index) => (
                    <Card key={index} {...article} />
                ))}
            </CardGrid>
            <CardGrid>
                {newsArticles.map((article, index) => (
                    <Card key={index} {...article} />
                ))}
            </CardGrid>
        </Container>
    );
};

export default Home;
