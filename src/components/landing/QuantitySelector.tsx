'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus } from 'lucide-react';

export function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={handleDecrement} aria-label="Diminuir quantidade">
        <Minus className="h-4 w-4" />
      </Button>
      <Input
        type="number"
        className="w-16 text-center font-bold text-lg"
        value={quantity}
        readOnly
        aria-label="Quantidade"
      />
      <Button variant="outline" size="icon" onClick={handleIncrement} aria-label="Aumentar quantidade">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
