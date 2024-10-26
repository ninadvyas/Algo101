import Visualization from '@/components/Visualization';

export default function PracticePage() {
  return (
    <div className="w-full sm:px-8 flex flex-col items-center justify-center min-h-screen py-8 px-4">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold text-center">Algorithm Visualizations</h1>
        <Visualization/>
      </div>
    </div>
  );
}