import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

// Статичний список зображень для гарантованої роботи після деплою
const memberImages = [
  { id: 'marc', path: '/assets/members/margelo_faces_marc.svg' },
  { id: 'szymon', path: '/assets/members/margelo_faces_szymon.svg' },
  { id: 'thomas', path: '/assets/members/margelo_faces_thomas.svg' },
  { id: 'christoph', path: '/assets/members/margelo_faces_christoph.svg' },
  { id: 'hanno', path: '/assets/members/margelo_faces_hanno.svg' },
  { id: 'janic', path: '/assets/members/margelo_faces_janic.svg' },
  { id: 'taras', path: '/assets/members/margelo_faces_taras.svg' },
  { id: 'terry', path: '/assets/members/margelo_faces_terry.svg' },
  { id: 'eric', path: '/assets/members/margelo_faces_eric.svg' },
  { id: 'viktoria', path: '/assets/members/margelo_faces_viktoria.svg' },
];

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
  // Знаходимо шлях до зображення за ID
  const image = memberImages.find(img => img.id === id.toLowerCase());

  return ( 
    <div className="member-card" style={{ textAlign: 'center', margin: '20px' }}>
      <div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
        {image ? (
          <Image
            src={image.path}
            width={300}
            height={300}
            alt={`${name}'s profile`}
            quality={100}
            style={{ borderRadius: '50%' }}
          />
        ) : (
          <div style={{ 
            width: 300, 
            height: 300, 
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span>No Image</span>
          </div>
        )}
      </div>
      
      <h2 className="text-2xl xl:text-3xl" style={{ margin: '10px 0' }}>{name}</h2>
      <div className="text-xl" style={{ marginBottom: '15px' }}>
        <Link 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'none' }}
        >
          {socialId}
        </Link>
      </div>
    </div>
  );
};

export default Member;