
export function getDataList(key: string) {
    return JSON.parse(window.localStorage.getItem(key) ?? "[]")
}

export function setData(key: string, data: object) {
    window.localStorage.setItem(key, JSON.stringify(data));
}
