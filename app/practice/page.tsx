import Link from 'next/link';
import Home from '@/components/Home';
import Cardx from '@/components/Cardx';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <Cardx />
    </div>
  );
}
