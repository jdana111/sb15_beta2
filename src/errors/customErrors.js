class EmptyResponseError extends TypeError {
  constructor(message) {
    super(message);
    this.code = 'EMPTY_RESPONSE_TYPE_ERROR';
  }
}

export { EmptyResponseError }