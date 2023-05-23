export const formatDate = (date: string) => {
  let d = new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return d;
};