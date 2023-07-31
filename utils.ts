export const messageHandler = (message: string, data: object | string) => {
  return {
    message: message,
    data: data,
  };
}