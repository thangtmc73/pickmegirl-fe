import SessionForm from 'components/SessionForm';

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-base-300">
      <SessionForm
        title="Create Session"
        ctaText="Create"
        onCTAClick={(name) => {
          console.log('hello', name);
        }}
      />
    </div>
  );
}
