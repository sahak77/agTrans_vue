export const setActionResult = (status, type, actionResult, msg) => {
  actionResult.type = type;
  if (status === 'fulfilled') {
    actionResult.loading = false;
    actionResult.status = true;
    actionResult.msg = '';
  } else if (status === 'rejected') {
    actionResult.loading = false;
    actionResult.status = false;
    actionResult.msg = msg;
  } else if (status === 'pending') {
    actionResult.loading = true;
    actionResult.status = false;
    actionResult.msg = '';
  }
};