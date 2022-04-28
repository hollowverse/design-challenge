import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#F9EBEA' }}>
      <Image
        width={50}
        height={50}
        alt="Hollowverse"
        src="/images/letter-logo.png"
      />

      <p>
        Hollowverse is about the important <br />
        people and their beliefs.
      </p>

      <p>
        Email us at{' '}
        <a href="mailto:hollowverse@hollowverse.com">
          hollowverse@hollowverse.com
        </a>
        .
      </p>
    </footer>
  );
};
