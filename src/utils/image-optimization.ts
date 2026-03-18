/**
 * Optimizes a Hygraph asset URL by adding resizing transformations.
 * Supports both media.graphassets.com and ap-south-1.graphassets.com patterns.
 */
export function getOptimizedImage(
  url: string | undefined,
  { width = 400, height = 300, fit = "crop" }: { width?: number; height?: number; fit?: string } = {}
): string {
  if (!url) return "";
  
  // If it's already a transformation URL, don't double transform
  if (url.includes("/resize=")) return url;

  const transformations = `resize=width:${width},height:${height},fit:${fit}`;

  // Pattern 1: https://media.graphassets.com/HANDLE
  if (url.includes("media.graphassets.com")) {
    const parts = url.split("/");
    const handle = parts[parts.length - 1];
    return `https://media.graphassets.com/${transformations}/${handle}`;
  }

  // Pattern 2: https://ap-south-1.graphassets.com/PROJECT_ID/HANDLE
  if (url.includes("graphassets.com")) {
    const parts = url.split("/");
    // Usually parts are: ["https:", "", "ap-south-1.graphassets.com", "PROJECT_ID", "HANDLE"]
    if (parts.length >= 5) {
      const protocolAndSlashes = parts.slice(0, 3).join("/");
      const projectId = parts[3];
      const handle = parts[4];
      return `${protocolAndSlashes}/${projectId}/${transformations}/${handle}`;
    }
    // Fallback if handle structure is different
    const handle = parts.pop();
    const remaining = parts.join("/");
    return `${remaining}/${transformations}/${handle}`;
  }

  return url;
}
