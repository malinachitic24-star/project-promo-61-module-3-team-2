
const API_URL = "https://api-pw.dev.adalab.es/api/projectCard";

export async function createProjectCard(payload) {
  let response;
  let data;

  /* CALL API */

  try {
    response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde."
    );
  }

  /* JSON ANSWER */
  try {
    data = await response.json();
  } catch {
    throw new Error(
      `El servidor respondió con un formato inesperado (${response.status}).`
    );
  }

  /* ERROR */
  if (!data?.success) {
    throw new Error(
      data?.error || "La API devolvió un error inesperado."
    );
  }

  return data;
}
