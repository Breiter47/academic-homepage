export function assetUrl(url: string) {
  return url.startsWith('/') && !url.startsWith('//')
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${url}` : url;
}
