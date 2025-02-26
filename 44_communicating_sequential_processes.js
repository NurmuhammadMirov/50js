// CSP (communication sequential processes) is a formal language for describing patterns of interaction
// in concurrent system. It's used in Go, Crystal, Clojure's core.async, and other places

// The idea is nothing so complicated, but it offers some intersting capabilities.
// Think about a channel that we can use to transfer messages. We attach publushers and subscribers.
// Nothing unusual. Every event-based system works like that. However, in CSP those two groups are synchronized.
// Meaning that publushing is not possible until we have subscriber that awaits the message.

// Here is a simple implementation of sucn a channel
function createChannel() {
  const puts = [], takes = [];
  return {
    put: (data) => new Promise(resolvePut =>
      takes.length > 0
        ? (takes.shift()(data), resolvePut())
        : (puts.push(() => resolvePut()))
    ),
    take: () => new Promise(resolveTake =>
      puts.length > 0
        ? resolveTake(puts.shift()())
        : takes.push(resolveTake)
    )
  }
}

const channel = createChannel();

// here is one possible use case:
async function A() {
  console.log('Waiting for values');
  console.log(`Receiving ${await channel.take()}`);
  console.log(`Receiving ${await channel.take()}`);
}
async function B() {
  console.log('Sending "foo"');
  await channel.put('foo');
  console.log('Sending "bar"');
  await channel.put('bar');
  console.log('Messagin over');
}

A(); B();