export default function VideoPage() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto rounded-3xl"
    >
      <source src="/website-portfolio.mp4" type="video/mp4" />
      <source src="/website-portfolio.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos.
    </video>
  );
}