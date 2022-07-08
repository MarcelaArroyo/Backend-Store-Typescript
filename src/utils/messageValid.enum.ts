enum MessageValid {
  REQUIRED = 'is required',
  STRING = 'must be a string',
  LENGTH_STRING = 'length must be at least 3 characters long',
  NUMBER = 'must be a number',
  LENGTH_NUMBER = 'must be greater than or equal to 1',
  LENGTH_PASSWORD = 'length must be at least 8 characters long',
}

export default MessageValid;