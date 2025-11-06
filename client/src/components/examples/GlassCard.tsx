import GlassCard from '../GlassCard';

export default function GlassCardExample() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <GlassCard className="p-8 max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Glass Card</h2>
        <p className="text-white/70">
          This is a glassmorphic card with backdrop blur and subtle gradients.
        </p>
      </GlassCard>
    </div>
  );
}
