
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface BooleanToggleProps {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

const BooleanToggle: React.FC<BooleanToggleProps> = ({
  label,
  checked,
  onCheckedChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between space-x-2 mb-4 ${className}`}>
      <Label htmlFor={label.replace(/\s+/g, '-').toLowerCase()} className="text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Switch
        id={label.replace(/\s+/g, '-').toLowerCase()}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
};

export default BooleanToggle;
