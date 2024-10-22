import Link from 'next/link';
import Home from '@/components/Home';
import Cardx from '@/components/Cardx';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen imagebackground">
      <div className="sm:w-10/12 lg:w-7/12 xl:w-5/12 sm:px-8">
        <Home />
        <Cardx />
      </div>
    </div>
  );
}
