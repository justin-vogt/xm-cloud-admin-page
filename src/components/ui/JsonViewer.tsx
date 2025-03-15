
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronDown, Copy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface JsonViewerProps {
  data: any;
  title?: string;
  initialExpanded?: boolean;
  level?: number;
  maxLevel?: number;
}

const JsonViewer: React.FC<JsonViewerProps> = ({
  data,
  title,
  initialExpanded = true,
  level = 0,
  maxLevel = 2,
}) => {
  const [isExpanded, setIsExpanded] = useState(initialExpanded || level < maxLevel);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    toast({
      title: 'Copied to clipboard',
      description: 'JSON data has been copied to clipboard',
      duration: 2000,
    });
  };

  const isObject = data !== null && typeof data === 'object';
  const isEmpty = isObject && Object.keys(data).length === 0;

  if (isEmpty) {
    return <span className="text-gray-400 italic">{Array.isArray(data) ? '[]' : '{}'}</span>;
  }

  if (!isObject) {
    if (typeof data === 'string') {
      return <span className="text-green-600">"{data}"</span>;
    }
    if (typeof data === 'number') {
      return <span className="text-blue-600">{data}</span>;
    }
    if (typeof data === 'boolean') {
      return <span className="text-purple-600">{data ? 'true' : 'false'}</span>;
    }
    if (data === null) {
      return <span className="text-gray-500">null</span>;
    }
    return <span>{String(data)}</span>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="font-mono text-sm">
      {title && level === 0 && (
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-900">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-7 px-2 text-xs"
          >
            <Copy size={14} className="mr-1" />
            Copy
          </Button>
        </div>
      )}
      
      {level > 0 && (
        <span
          onClick={toggleExpand}
          className="cursor-pointer inline-flex items-center"
        >
          {isExpanded ? (
            <ChevronDown size={14} className="text-gray-500" />
          ) : (
            <ChevronRight size={14} className="text-gray-500" />
          )}
        </span>
      )}
      
      {Array.isArray(data) ? (
        <>
          <span onClick={toggleExpand} className="cursor-pointer">
            [{isExpanded ? '' : `...${data.length} items`}
          </span>
          {isExpanded && (
            <div className="pl-4 border-l border-gray-200 ml-1">
              {data.map((item, index) => (
                <div key={index} className="my-1">
                  <span className="text-gray-500">{index}: </span>
                  <JsonViewer 
                    data={item}
                    level={level + 1}
                    maxLevel={maxLevel}
                  />
                  {index < data.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
          )}
          {isExpanded && <span>]</span>}
        </>
      ) : (
        <>
          <span onClick={toggleExpand} className="cursor-pointer">
            {level > 0 && '{'}
            {!isExpanded && '...'}
          </span>
          {isExpanded && (
            <div className={`${level > 0 ? 'pl-4 border-l border-gray-200 ml-1' : ''}`}>
              {Object.entries(data).map(([key, value], index, array) => (
                <div key={key} className="my-1">
                  <span className="text-gray-800 font-semibold">"{key}"</span>
                  <span className="text-gray-500">: </span>
                  <JsonViewer 
                    data={value}
                    level={level + 1}
                    maxLevel={maxLevel}
                  />
                  {index < array.length - 1 && <span>,</span>}
                </div>
              ))}
            </div>
          )}
          {isExpanded && level > 0 && <span>{'}'}</span>}
        </>
      )}
    </div>
  );
};

export default JsonViewer;
