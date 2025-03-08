export default function TheBunPage() {
  return (
    <div className="w-full h-screen relative">
      <iframe
        src="https://www.thebun.xyz"
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  )
} 