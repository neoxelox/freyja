export function getHour(date: Date): number {
    return date.getHours() % 12;
}

export function getMonth(date: Date): string {
    const monthNumber = date.getMonth();
    switch (monthNumber) {
        case 0:
            return "Ene";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Abr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Ago";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dic";
    }
}

export function formatDate(date: Date): string {
    return getHour(date) + ":" + date.getMinutes() + " · " + getMonth(date) + " " + date.getDate() + ", " + date.getFullYear();
}
