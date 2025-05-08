export type CreateAndSubmitForm = {
  url: string;
  token: string;
  callback: string;
};
export const createAndSubmitForm = ({
  url,
  token,
  callback,
}: CreateAndSubmitForm) => {
  const form = document.createElement('form');
  form.setAttribute('action', url);
  form.setAttribute('method', 'POST');

  const tokenField = document.createElement('input');
  tokenField.setAttribute('type', 'hidden');
  tokenField.setAttribute('name', 'token');
  tokenField.setAttribute('value', token);

  const redirectURLField = document.createElement('input');
  redirectURLField.setAttribute('type', 'hidden');
  redirectURLField.setAttribute('name', 'GetMethod');
  redirectURLField.setAttribute('value', '');

  form.appendChild(redirectURLField);
  form.appendChild(tokenField);
  document.body.appendChild(form);

  form.submit();
};
