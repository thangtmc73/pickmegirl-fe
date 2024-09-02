import { useState } from 'react';

export default function SessionForm({ ctaText, title, onCTAClick }: SessionFormProps) {
  const [name, setName] = useState('');
  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <div className="card-body items-center gap-4 text-center">
        <h2 className="card-title text-xl text-base-content">{title}</h2>
        <input
          type="text"
          placeholder="Type your name in session"
          className="input input-bordered input-primary w-full max-w-xs text-base-content"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => {
              onCTAClick(name);
            }}
          >
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

interface SessionFormProps {
  ctaText: string;
  onCTAClick: (name: string) => void;
  title: string;
}
