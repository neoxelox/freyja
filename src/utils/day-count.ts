const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function dayCountString(days: number): string {
    if (days < 1) return "Hoy";
    else if (days < 2) return "Ayer";
    else if (days < 3) return "Anteayer";
    else return days + " días";
}

export function dayCount(date: Date): string {
    const today = new Date();

    const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

    const days = Math.floor((utc1 - utc2) / MS_PER_DAY);

    return dayCountString(days);
}
