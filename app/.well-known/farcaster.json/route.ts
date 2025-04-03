export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || "https://task-tribe-liav.vercel.app";

  return Response.json({
    accountAssociation: {
      header: process.env.FARCASTER_HEADER || "eyJmaWQiOjk2NzQyMSwidHlwZ...",
      payload: process.env.FARCASTER_PAYLOAD || "eyJkb21haW4iOiJ0YXNrLXRyaW...",
      signature: process.env.FARCASTER_SIGNATURE || "MHg4ZGNiNGNlZTQ5MjNkNjViO...",
    },
    frame: {
      version: process.env.NEXT_PUBLIC_VERSION || "next",
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "task-tribe",
      homeUrl: URL,
      iconUrl: process.env.NEXT_PUBLIC_ICON_URL || `${URL}/snake.png`,
      imageUrl: process.env.NEXT_PUBLIC_IMAGE_URL || `${URL}/snake.png`,
      buttonTitle: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME || "task-tribe"}`,
      splashImageUrl: process.env.NEXT_PUBLIC_SPLASH_IMAGE_URL || `${URL}/snake.png`,
      splashBackgroundColor: `#${process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR || "FFFFFF"}`,
      webhookUrl: `${URL}/api/webhook`,
    },
  });
}
