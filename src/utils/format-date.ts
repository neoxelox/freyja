export function getHour(date: Date): number {
    return date.getHours() % 12;
}

export function getPartOfTheDay(date: Date): "AM" | "PM" {
    return date.getHours() < 12 ? "AM" : "PM";
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
    return (
        twoDigits(getHour(date)) +
        ":" +
        twoDigits(date.getMinutes()) +
        " " +
        getPartOfTheDay(date) +
        " · " +
        getMonth(date) +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear()
    );
}

export function twoDigits(n: number): string {
    if (n < 10) return "0" + n.toString();
    else return n.toString();
}
