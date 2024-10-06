const versionRegex = /^(\d+\.\d+\.\d+)(?:-(\w+\.?\d+))?$/;

const processArgs = (args, content) => {
  const options = content.length ? content : "{}";
  const parsedArgs = [args[0], args[1]];

  if (args.length === 3) {
    if (versionRegex.test(args[2])) {
      parsedArgs.push(args[2]);
    } else if (args[2] === "simple") {
      parsedArgs.push(null, args[2]);
    } else {
      parsedArgs.push(null, null, [args[2]]);
    }
  } else if (args.length >= 4) {
    if (versionRegex.test(args[2])) {
      parsedArgs.push(args[2]);
      if (args[3] === "simple") {
        parsedArgs.push(args[3], args.slice(4));
      } else {
        parsedArgs.push(null, args.slice(3));
      }
    } else if (args[2] === "simple") {
      parsedArgs.push(null, args[2], args.slice(3));
    } else {
      parsedArgs.push(null, null, args.slice(2));
    }
  }

  if (!parsedArgs[0].endsWith("%") && !parsedArgs[0].endsWith("px")) {
    parsedArgs[0] += "px";
  }
  if (!parsedArgs[1].endsWith("%") && !parsedArgs[1].endsWith("px")) {
    parsedArgs[1] += "px";
  }
  return {
    id: "echarts" + ((Math.random() * 9999) | 0),
    options: options,
    width: parsedArgs[0],
    height: parsedArgs[1],
    version: parsedArgs[2] || "5.5.1",
    type: parsedArgs[3] || "",
    args: parsedArgs[4] || [],
  };
};

module.exports = processArgs;
