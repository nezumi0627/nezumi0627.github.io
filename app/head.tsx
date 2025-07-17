export default function Head() {
  return (
    <>
      {/* Preconnect to LINE static resources to speed up connection establishment */}
      <link rel="preconnect" href="https://static.line-scdn.net" crossOrigin="" />
      <link rel="preconnect" href="https://liffsdk.line-scdn.net" crossOrigin="" />
    </>
  );
}
