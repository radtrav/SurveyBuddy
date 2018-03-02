const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default emails => {

  if(!emails) {
    return null
  };

  const invalidEmails = emails
    .trim()
    .split(',')
    .filter(email => re.test(email) === false);

  if(invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }

  return null;
};
