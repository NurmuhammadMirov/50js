// Dependency injection (DI) or inverse of control (IoC) is a concept that is not popular in the
// JavaScript ecosystem. In some cases, the framework pushes the developer to use some sort of DI.
// But otherwise, solving dependency management is not among the core problems of today's projects.
// To better understand the need for DI check the example below:

async function postToFacebook(message, service, settings) {
  const client = new Service({ APIKey: settings.fb.key });
  const result = await client.post(message);
  return result;
}

// This function that posts a message to the popular social network has three dependencies. The first
// one is the message. We have to leave that because it is different every time. We don't know that up
// front. The other two are known dependencies. We know what service we will be using and, we also know
// the API key. So, now the question is: "Is is a job of this function to initiate the service?". Probably
// no. Another inconvenient fact is that we have to carry the "Service" class and the 'settings' to every
// place where we use this function. We have a design problem.

// One of the solution is to rely on dependency injection and create the service in another place. Then deliver it
// to the function when we need it. Implementation wise we need a DI container. Something like:

const Container = {
  _storage: {},
  register(key, deps, func) {
    this._storage[key] = {deps, func};
  },
  get(key) {
    if (!this._storage[key]) throw new Error(`Missing ${key}`);
    const { func, deps } = this._storage[key];
    return (...args) => {
      const resolveDeps = deps.map((key) => this.get(key));
      return func(...resolveDeps, ...args);
    };
  },
};

// With that, we can start and register our dependencies. The first one will be 'settings' and then the 'Services'.
Container.register('settings', [], () => {
  return { fb: { key: 'xxx' } }
});
Container.register('client', ['settings'], (settings) => {
  return new Service({ APIKey: settings().fb.key })
});

// After this code, our container knows about all the dependencies of postToFacebook function. Notice that
// we are also defining a connection between the client and the settings. This is another dependency problem
// that we solve right away here at the container level. 

// The next step is to register postFacebook. This last step is important. It is the moment where we let the
// container inject the dependencies.

Container.register('postToFacebook', ['client'], async (client, message) => {
  const result = await client().post(message);
  return result;
});

// The deoendencies appear first in the list of arguments. After that, we have the function
// parameters. In our case, this is the message string. Here is how the code that uses the
// container looks like:

const publish = Container.get('postToFacebook');
publish("What a beautiful day!");

// The get method of the container resolces the needed dependencies and, we ger back a
// function that requires just the message.