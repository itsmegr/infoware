import makeError from "http-errors";
function coatError(err: any) {
  if (err.status) return err;
  return new makeError.InternalServerError();
}

export { makeError, coatError };
