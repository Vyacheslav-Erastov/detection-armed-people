export const to_ru = (message: string) => {
    if (!message) {
        return "Н/Д";
    }
    const labels: { [en_str: string]: string } = {
        "CREATED": "СОЗДАНА"
    }
    return labels[message] || message;
}