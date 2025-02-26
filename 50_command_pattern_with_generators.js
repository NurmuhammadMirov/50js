function* logic() {
  const name = yield ["get:name"];
  const user = yield ["get:user", name];
  console.log(`Hey ${user.firstName} ${user.lastName}`);
}

// "get:name" and "get:user" are the so-called commands. Those are the instruction.

function processor(gen, result) {
  let status = gen.next(result);
  if (!status.done) {
    const [command, param] = status.value;
    switch (command) {
      case "get:name":
        return processor(gen, "Tracy King");
      case "get:user":
        const [firstName, lastName] = param.split(" ");
        return processor(gen, { firstName, lastName });
    }
  }
}

processor(logic());