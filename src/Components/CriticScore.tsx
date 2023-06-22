import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
    score: number;
}

const CriticScore = ({score}: Props) => {   
    let color = score < 75 ? 'red': score < 85 ? 'yellow' : 'green';

  return (
    <Badge colorScheme={color} fontSize='14 px' paddingX={1} borderRadius={'4px '}>{score}</Badge>
  )
}

export default CriticScore;