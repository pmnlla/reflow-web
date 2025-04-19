export const DocsPage = async ({ rawMdxUrl }: { rawMdxUrl: string }) => {
  const raw = await fetch(rawMdxUrl).then(res => res.text())

}