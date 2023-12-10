function rot13(str) {
    return str.replace(/[A-Z]/g, (char) => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 77) return String.fromCharCode(code + 13);
        else if (code >= 78 && code <= 90)  return String.fromCharCode(code - 13);
        else return char;
    });
}
