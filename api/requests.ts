const HOST = process.env.NEXT_PUBLIC_HOST;

const requests = {
  /**
   * GET request
   *
   * @param  string url
   *
   * @return {object}     Response object
   */
  get: async (url: string, options?: any) => {
    const response = await fetch(`${HOST}${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options?.headers ? options.headers : {})
      }
    });

    return await response.json();
  },

  /**
   * POST request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {Object}     Response object
   */
  post: async (url: string, body = {}) => {
    const response = await fetch(`${HOST}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  },

  /**
   * POST request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {Object}     Response object
   */
  put: async (url: string, body = {}) => {
    const response = await fetch(`${HOST}${url}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  },

  /**
   * DELETE request
   *
   * @param  string url
   * @param  Object body
   *
   * @return {Object}     Response object
   */
  delete: async (url: string, body = {}) => {
    const response = await fetch(`${HOST}${url}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return await response.json();
  }
};

export default requests;
