// FeatureCard.tsx (Molecule)
import React from 'react';
import ImageComponent from '@/app/components/atoms/commons/ImageComponent';
import Paragraph from '@/app/components/atoms/commons/Paragraph';
import Button from '@/app/components/atoms/commons/Button';
import Card from '@/app/components/atoms/commons/Card';

interface FeatureCardProps {
  image: string;
  text: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, text }) => {
  return (
    <Card className="flex gap-3 flex-col">
      <ImageComponent src={image} alt="" width={40} height={40} />
      <Paragraph className="font-bold text-sm">{text}</Paragraph>
      <Button
        bgColor="transparent flex gap-1 items-center jutify-center"
        hoverBgColor="transparent"
        padding="p-0"
        onClick={() => null}>
        <Paragraph className="text-black text-sm">바로가기</Paragraph>
        <ImageComponent src="/images/arrow-right-square-icon.png" alt="" width={17} height={17} />
      </Button>
    </Card>
  );
};

export default FeatureCard;
