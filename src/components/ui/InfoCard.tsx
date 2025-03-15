
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  children,
  className = ''
}) => {
  return (
    <Card className={`overflow-hidden animate-slide-in card-shadow ${className}`}>
      <CardHeader className="bg-gradient-to-r from-sitecore-accent/10 to-white border-b border-sitecore-midgray">
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
