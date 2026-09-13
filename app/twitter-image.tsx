import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const alt = 'Abhijith S Mohan — Entrepreneur & Business Builder';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  const profileImageBuffer = readFileSync(
    join(process.cwd(), 'public/images/abhijith-profile.png')
  );
  const profileImage = profileImageBuffer.buffer.slice(
    profileImageBuffer.byteOffset,
    profileImageBuffer.byteOffset + profileImageBuffer.byteLength
  );

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0C10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          color: '#F8FAFC',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '650px',
            height: '630px',
            overflow: 'hidden',
          }}
        >
          <img
            src={profileImage as unknown as string}
            alt="Abhijith S Mohan"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 20%',
              width: '100%',
              height: '100%',
            }}
          />
          {/* Gradient Overlay for smooth blending */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              width: '200px',
              backgroundImage: 'linear-gradient(to right, #0A0C10, rgba(10, 12, 16, 0))',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundImage: 'linear-gradient(to top, rgba(10, 12, 16, 1) 0%, rgba(10, 12, 16, 0) 15%)',
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '64px',
            width: '850px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px',
              whiteSpace: 'nowrap',
            }}
          >
            Abhijith S Mohan
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 500,
              color: '#94A3B8',
              marginBottom: '24px',
              whiteSpace: 'nowrap',
            }}
          >
            Entrepreneur & Business Builder
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '24px',
              fontWeight: 500,
              color: '#6366F1',
              whiteSpace: 'nowrap',
            }}
          >
            Marketing • AI • Technology
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
