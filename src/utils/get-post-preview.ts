export function getPostPreview(text: string): string {
    let preview = text.substring(0, 250);
    if (text.length > preview.length) preview += "...";
    return preview;
}
