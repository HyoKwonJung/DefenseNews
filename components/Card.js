import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 16px;
  overflow: hidden;
  width: calc(33% - 32px);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const CardDate = styled.p`
  font-size: 0.9em;
  color: #888;
`;

const CardDescription = styled.p`
  font-size: 1em;
  color: #333;
`;

const Card = ({ title, description, imageUrl, date }) => (
  <CardContainer>
    <CardImage src={imageUrl} alt={title} />
    <CardContent>
      {date && <CardDate>{date}</CardDate>}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </CardContainer>
);

export default Card;
