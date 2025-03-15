
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Check, X } from 'lucide-react';

interface EditableFieldProps {
  label: string;
  value: string;
  isEditable?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  isEditable = false,
  onChange,
  className = '',
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);

  const handleEdit = () => {
    if (!isEditable) return;
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleSave = () => {
    if (onChange) {
      onChange(editValue);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex flex-col space-y-1.5">
        <label className="text-sm font-medium text-gray-500">{label}</label>
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <Input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1"
              autoFocus
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              className="h-8 w-8 text-green-600"
            >
              <Check size={16} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCancel}
              className="h-8 w-8 text-red-500"
            >
              <X size={16} />
            </Button>
          </div>
        ) : (
          <div className="flex items-center justify-between group">
            <p className="text-base text-gray-900 truncate">{value}</p>
            {isEditable && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleEdit}
                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Pencil size={16} className="text-sitecore-accent" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EditableField;
