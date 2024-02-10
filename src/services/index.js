export const loadAllNotesService = async () => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`);

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const singleNoteService = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/note/${id}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getDataService = async ({ token }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendNoteService = async ({ data, token }) => {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const deleteNoteService = async ({ id, token }) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/note/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
